import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import H6Title from "@/components/atoms/H6Title";
import { RootState } from "@/state/store";
import { actions, Category, Categories } from "@/state/categories";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";

const CategorySetting: React.FC = () => {
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  const add = (): void => {
    const newCategory: Category = {
      name: "",
      defaultAmount: 0,
      // 末尾に追加
      sortIndex: Object.entries(categories).length,
    };
    dispatch(actions.createCategory(newCategory));
    console.log(categories);
  };

  const remove = (id: string): void => {
    dispatch(actions.deleteCategory(id));
  };

  const editName = (id: string, name: string): void => {
    dispatch(
      actions.updateCategory(
        Object.assign({}, categories[id], {
          name,
        }),
        id
      )
    );
  };

  const editBudget = (id: string, defaultAmount: number): void => {
    console.log(defaultAmount);
    dispatch(
      actions.updateCategory(
        Object.assign({}, categories[id], {
          defaultAmount,
        }),
        id
      )
    );
    console.log(categories);
  };

  const budgetEditItemProps = (
    categoryId: string,
    category: Category
  ): BudgetEditItemProps => {
    return {
      categoryName: category.name,
      budget: category.defaultAmount,
      handleChangeCategoryName: (value): void => {
        editName(categoryId, value);
      },
      handleChangeBudget: (value: string): void => {
        // inputをnumberに置換
        editBudget(categoryId, parseInt(value, 10));
      },
      handleClickDeleteButton: (): void => {
        remove(categoryId);
      },
    };
  };

  const addButtonProps: TextButtonProps = {
    text: "ADD CATEGORY",
    handleClick: add,
  };

  return (
    <Container maxWidth="sm">
      <H6Title text="Default Category"></H6Title>
      {Object.entries(categories).map(([key, item]) => {
        return (
          <BudgetEditItem
            key={key}
            {...budgetEditItemProps(key, item)}
          ></BudgetEditItem>
        );
      })}
      <Box padding="20px 0">
        <TextButton {...addButtonProps}></TextButton>
      </Box>
    </Container>
  );
};

export default CategorySetting;
