import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import { actions, budgetsSelectors, Budget, Budgets } from "@/state/budgets";
import { categoriesSelectors, Categories } from "@/state/categories";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import H6Title from "@/components/atoms/H6Title";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import getPriceSeparatedByComma from "@/util/functions/getPriceSeparatedByComma";
import useStyles, {
  usePanelClasses,
  usePanelSummaryClasses,
  usePanelDetailsClasses,
} from "./style";

const yyyymmWithSlash = (yyyymm: string): string => {
  const matchList = yyyymm.match(/(\d{4})(\d{2})/);
  return matchList ? `${matchList[1]}/${matchList[2]}` : yyyymm;
};

const BudgetView: React.FC = () => {
  const classes = useStyles();
  const panelClasses = usePanelClasses();
  const panelDetailsClasses = usePanelDetailsClasses();
  const panelSummaryClasses = usePanelSummaryClasses();

  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );

  const dispatch = useDispatch();
  const [currentMonth, setCurrentMonth] = useState<string | false>("");

  const budgetAmount = (budgets: Budgets, month: string): string => {
    return getPriceSeparatedByComma(
      budgetsSelectors.getBudgetAmount(budgets, month)
    );
  };

  const toggle = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ): void => {
    setCurrentMonth(isExpanded ? panel : false);
  };

  const addBudget = (): void => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    const YYYY = nextMonth.getFullYear();
    // TODO:来月以外も指定できるように
    // 来月を指定
    const MM = `0${nextMonth.getMonth() + 1}`.slice(-2);
    const currentYYYYMM = `${YYYY}${MM}`;
    const newBudget: Budget = categoriesSelectors.getDefaultBudget(categories);
    dispatch(actions.createBudget(newBudget, currentYYYYMM));
  };

  const deleteBudget = (): void => {
    if (currentMonth) {
      dispatch(actions.deleteBudget(currentMonth));
      // 開いているパネルを閉じる
      setCurrentMonth(false);
    }
  };

  const budgetEditItemProps = (
    month: string,
    categoryName: string,
    categoryBudget: number
  ): BudgetEditItemProps => {
    return {
      categoryName: categoryName,
      budget: categoryBudget,
      // 予算設定画面ではカテゴリ名は修正できないため、空関数を渡す
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      handleChangeCategoryName: (): void => {},
      handleChangeBudget: (value: string): void => {
        const newBudget: Budget = budgets[month].budget;
        // 更新用の予算から指定カテゴリの予算を取得し、金額を更新する
        const budgetOfCategory = Object.values(newBudget).find((value) => {
          return (
            value.category.ref ===
            categoriesSelectors.getIdFromName(categories, categoryName)
          );
        });
        if (budgetOfCategory) {
          budgetOfCategory.amount = parseInt(value, 10);
          dispatch(actions.updateBudget(Object.assign({}, newBudget), month));
        }
      },
      categoryEditDisabled: true,
      deleteDisabled: true,
    };
  };

  const addButtonProps: TextButtonProps = {
    text: "ADD BUDGET",
    handleClick: addBudget,
  };

  const deleteButtonProps: TextButtonProps = {
    text: "DELETE BUDGET",
    handleClick: deleteBudget,
    isNegative: true,
  };

  return (
    <>
      <H6Title text="Budget"></H6Title>
      {Object.entries(budgets).map(([yyyymm, value]) => {
        return (
          <ExpansionPanel
            className={panelClasses.root}
            key={yyyymm}
            square
            expanded={currentMonth === yyyymm}
            onChange={toggle(yyyymm)}
          >
            <ExpansionPanelSummary
              classes={{
                root: panelSummaryClasses.root,
                content: panelSummaryClasses.content,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {yyyymmWithSlash(yyyymm)}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                ¥{budgetAmount(budgets, yyyymm)}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={panelDetailsClasses.root}>
              {Object.entries(value.budget).map(([id, item]) => {
                return (
                  <BudgetEditItem
                    key={id}
                    {...budgetEditItemProps(
                      yyyymm,
                      item.category.name,
                      item.amount
                    )}
                  ></BudgetEditItem>
                );
              })}
              <Box padding="20px 0">
                <TextButton {...deleteButtonProps}></TextButton>
              </Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
      <Container maxWidth="sm">
        <Box padding="20px 0">
          <TextButton {...addButtonProps}></TextButton>
        </Box>
      </Container>
    </>
  );
};

export default BudgetView;
