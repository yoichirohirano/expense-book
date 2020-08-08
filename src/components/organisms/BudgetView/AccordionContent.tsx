import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, ExpansionPanelDetails } from "@material-ui/core";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import { usePanelDetailsClasses } from "./style";

import { RootState } from "@/state/store";
import {
  budgetsActions,
  BudgetDocumentData,
  Budget,
  Budgets,
} from "@/state/budgets";
import { categoriesSelectors, Categories } from "@/state/categories";

const AccordionContent = (props: {
  yyyymm: string;
  budget: Budget;
  close: (yyyymm: string) => void;
}): JSX.Element => {
  const panelDetailsClasses = usePanelDetailsClasses();

  const dispatch = useDispatch();
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );

  const budgetComparerByCategoryDescending = (
    a: BudgetDocumentData,
    b: BudgetDocumentData
  ): number => {
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
          dispatch(
            budgetsActions.updateBudget(Object.assign({}, newBudget), month)
          );
        }
      },
      categoryEditDisabled: true,
      deleteDisabled: true,
    };
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
      {Object.values(props.budget)
        .sort(budgetComparerByCategoryDescending)
        .map((item) => {
          return (
            <BudgetEditItem
              key={item.category.ref}
              {...budgetEditItemProps(
                props.yyyymm,
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
  );
};

const memorized = React.memo(AccordionContent);

export default memorized;
