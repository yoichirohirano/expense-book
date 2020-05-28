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

  const budgetEditItemProps = (
    categoryId: string,
    category: Category
  ): BudgetEditItemProps => {
    return {
      categoryName: category.name,
      budget: category.defaultBudget,
      handleChangeCategoryName: (id: string, newCategoryName: string): void => {
        dispatch(
          actions.updateCategory(
            Object.assign({}, categories[id], {
              name: newCategoryName,
            }),
            id
          )
        );
        console.log(categories);
      },
      handleChangeBudget: (id: string, newBudget: number) => {
        const newCategory: Category = Object.assign({}, categories[id], {
          defaultBudget: newBudget,
        });
        dispatch(actions.updateCategory(newCategory, id));
        console.log(categories);
      },
      handleClickDeleteButton: (id: string) => {
        console.log(id);
        dispatch(actions.deleteCategory(id));
      },
    };
  };
  const textButtonProps: TextButtonProps = {
    text: "ADD CATEGORY",
    handleClick: () => {
      const newCategory: Category = {
        name: "",
        defaultBudget: 0,
        color: "#ffff00",
      };
      dispatch(actions.createCategory(newCategory));
      console.log(categories);
    },
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
        <TextButton {...textButtonProps}></TextButton>
      </Box>
    </Container>
  );
};

export default CategorySetting;
