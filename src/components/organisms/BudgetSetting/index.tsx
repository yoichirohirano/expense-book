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

const BudgetEditList: React.FC = () => {
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

  const add = (): void => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 2);
    const YYYY = nextMonth.getFullYear();
    // 来月を指定
    const MM = `0${nextMonth.getMonth() + 1}`.slice(-2);
    const currentYYYYMM = `${YYYY}${MM}`;
    const newBudget: Budget = categoriesSelectors.getDefaultBudget(categories);
    dispatch(actions.createBudget(newBudget, currentYYYYMM));
  };

  const budgetEditItemProps = (
    month: string,
    categoryName: string,
    categoryBudget: number
  ): BudgetEditItemProps => {
    return {
      categoryName: categoryName,
      budget: categoryBudget,
      categoryEditDisabled: true,
      // 予算設定画面ではカテゴリ名は修正できないため、空関数を渡す
      handleChangeCategoryName: (): void => {},
      handleChangeBudget: (value: string): void => {
        const newBudget: Budget = budgets[month].budget;
        const id = categoriesSelectors.getIdFromName(categories, categoryName);
        newBudget[id].amount = parseInt(value, 10);
        dispatch(actions.updateBudget(Object.assign({}, newBudget), month));
      },
    };
  };

  const addButtonProps: TextButtonProps = {
    text: "ADD BUDGET",
    handleClick: add,
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
              <Typography className={classes.heading}>{yyyymm}</Typography>
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

export default BudgetEditList;
