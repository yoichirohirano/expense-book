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
  budgetsSelectors,
  CategoryBudget,
  Budgets,
  CategoryBudgets,
} from "@/state/budgets";
import { categoriesSelectors, Categories } from "@/state/categories";

const AccordionContent = (props: {
  yyyymm: string;
  budget: CategoryBudgets;
  close: (yyyymm: string) => void;
}): JSX.Element => {
  const panelDetailsClasses = usePanelDetailsClasses();

  const dispatch = useDispatch();
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );

  const budgetComparerByCategoryDescending = (
    a: CategoryBudget,
    b: CategoryBudget
  ): number => {
    const aIndex = categoriesSelectors.getSelectedCategory(
      categories,
      a.category.id
    )?.sortIndex;
    const bIndex = categoriesSelectors.getSelectedCategory(
      categories,
      b.category.id
    )?.sortIndex;
    if (aIndex !== undefined && bIndex !== undefined) {
      return aIndex > bIndex ? 1 : -1;
    } else {
      return 1;
    }
  };

  const budgetEditItemProps = (
    yyyymm: string,
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
        // 更新前の該当月該当カテゴリ予算
        const present = budgetsSelectors.getCategoryBudgetOfSelectedMonth({
          budgets,
          yyyymm,
          categoryId: categoriesSelectors.getIdFromName(
            categories,
            categoryName
          ),
        });
        if (present) {
          const { budgetId, categoryBudget } = present;
          // 更新のための該当月該当カテゴリ予算
          const newCategoryBudget: CategoryBudget = Object.assign(
            categoryBudget,
            {
              amount: parseInt(value, 10),
            }
          );
          dispatch(
            budgetsActions.updateBudget({
              yyyymm,
              budgetId: budgetId,
              budget: newCategoryBudget,
            })
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
              key={item.category.id}
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
