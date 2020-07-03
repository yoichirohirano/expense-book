import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/state/store";
import {
  budgetsActions,
  budgetsSelectors,
  Budget,
  Budgets,
} from "@/state/budgets";
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
import AddBudgetButton, {
  AddBudgetButtonProps,
} from "@/components/molecules/AddBudgetButton";
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

const MemorizedAccordionButton = React.memo(function AccordionButton(props: {
  yyyymm: string;
  budgets: Budgets;
}) {
  const classes = useStyles();
  const panelSummaryClasses = usePanelSummaryClasses();
  const budgetAmount = (budgets: Budgets, month: string): string => {
    return getPriceSeparatedByComma(
      budgetsSelectors.getBudgetAmount(budgets, month)
    );
  };

  return (
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
        {yyyymmWithSlash(props.yyyymm)}
      </Typography>
      <Typography className={classes.secondaryHeading}>
        ¥{budgetAmount(props.budgets, props.yyyymm)}
      </Typography>
    </ExpansionPanelSummary>
  );
});

const MemorizedAccordionContent = React.memo(function AccordionContent(props: {
  yyyymm: string;
  budget: Budget;
  close: (yyyymm: string) => void;
}) {
  const panelDetailsClasses = usePanelDetailsClasses();

  const dispatch = useDispatch();
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );

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
          dispatch(
            budgetsActions.updateBudget(Object.assign({}, newBudget), month)
          );
        }
      },
      categoryEditDisabled: true,
      deleteDisabled: true,
    };
  };

  const getBudgetEditItemList = (
    yyyymm: string,
    budget: Budget
  ): Array<JSX.Element> => {
    return Object.values(budget)
      .sort((a, b) => {
        const aIndex = categoriesSelectors.getSelectedCategory(
          categories,
          a.category.ref
        )?.sortIndex;
        const bIndex = categoriesSelectors.getSelectedCategory(
          categories,
          b.category.ref
        )?.sortIndex;
        if (aIndex !== undefined && bIndex !== undefined) {
          return aIndex > bIndex ? 1 : -1;
        } else {
          return 1;
        }
      })
      .map((item) => {
        return (
          <BudgetEditItem
            key={item.category.ref}
            {...budgetEditItemProps(yyyymm, item.category.name, item.amount)}
          ></BudgetEditItem>
        );
      });
  };

  const deleteButtonProps: TextButtonProps = {
    text: "削除",
    handleClick: (): void => {
      props.close(props.yyyymm);
    },
    isNegative: true,
  };

  return (
    <ExpansionPanelDetails className={panelDetailsClasses.root}>
      {getBudgetEditItemList(props.yyyymm, props.budget)}
      <Box padding="20px 0">
        <TextButton {...deleteButtonProps}></TextButton>
      </Box>
    </ExpansionPanelDetails>
  );
});

const BudgetView: React.FC = () => {
  const panelClasses = usePanelClasses();

  const dispatch = useDispatch();
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );

  const [currentMonth, setCurrentMonth] = useState<string | false>("");

  const toggle = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ): void => {
    setCurrentMonth(isExpanded ? panel : false);
  };

  const addBudgetButtonProps: AddBudgetButtonProps = {
    addBudget: (yyyymm: string): void => {
      const currentYYYYMM = yyyymm;
      const newBudget: Budget = categoriesSelectors.getDefaultBudget(
        categories
      );
      dispatch(budgetsActions.createBudget(newBudget, currentYYYYMM));
      // Datepickerモーダルが消えるのを待ってからパネルを開く
      setTimeout(() => {
        setCurrentMonth(currentYYYYMM);
      }, 200);
    },
  };

  const close = useCallback((yyyymm: string) => {
    dispatch(budgetsActions.deleteBudget(yyyymm));
    // 開いているパネルを閉じる
    setCurrentMonth(false);
  }, []);

  return (
    <>
      <Box padding="20px 0">
        <H6Title text="予算設定"></H6Title>
      </Box>
      {Object.entries(budgets).map(([yyyymm, value]) => {
        return (
          <ExpansionPanel
            className={panelClasses.root}
            key={yyyymm}
            square
            expanded={currentMonth === yyyymm}
            onChange={toggle(yyyymm)}
          >
            <MemorizedAccordionButton yyyymm={yyyymm} budgets={budgets} />
            <MemorizedAccordionContent
              yyyymm={yyyymm}
              budget={value.budget}
              close={close}
            />
          </ExpansionPanel>
        );
      })}
      <Container maxWidth="sm">
        <AddBudgetButton {...addBudgetButtonProps}></AddBudgetButton>
      </Container>
    </>
  );
};

export default BudgetView;
