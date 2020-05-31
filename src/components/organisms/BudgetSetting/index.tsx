import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import { actions, Budget, Budgets } from "@/state/budgets";
import { Categories } from "@/state/categories";
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
import useStyles, {
  usePanelClasses,
  usePanelSummaryClasses,
  usePanelDetailsClasses,
} from "./style";

// デフォルトカテゴリ情報からデフォルト予算を取得する
const getDefaultBudget = (categories: Categories): Budget => {
  const defaultBudget: Budget = {};
  Object.entries(categories).forEach(([key, value]) => {
    defaultBudget[value.name] = value.defaultAmount;
  });
  return defaultBudget;
};

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
  const [expanded, setExpanded] = useState<string | false>("");

  const toggle = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ): void => {
    setExpanded(newExpanded ? panel : false);
  };

  const add = (): void => {
    const nextMonth = new Date();
    nextMonth.setMonth(nextMonth.getMonth() + 2);
    const YYYY = nextMonth.getFullYear();
    // 来月を指定
    const MM = `0${nextMonth.getMonth() + 1}`.slice(-2);
    const currentYYYYMM = `${YYYY}/${MM}`;
    const newBudget: Budget = getDefaultBudget(categories);
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
        const newBudget = budgets[month];
        newBudget[categoryName] = parseInt(value, 10);
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
      {Object.entries(budgets).map(([month, budget]) => {
        return (
          <ExpansionPanel
            className={panelClasses.root}
            key={month}
            square
            expanded={expanded === month}
            onChange={toggle(month)}
          >
            <ExpansionPanelSummary
              className={panelSummaryClasses.root}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{month}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={panelDetailsClasses.root}>
              {Object.entries(budget).map(([categoryName, categoryBudget]) => {
                return (
                  <BudgetEditItem
                    key={categoryName}
                    {...budgetEditItemProps(
                      month,
                      categoryName,
                      categoryBudget
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
