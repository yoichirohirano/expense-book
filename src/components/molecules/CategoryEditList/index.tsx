import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import H6Title from "@/components/atoms/H6Title";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import { Category } from "@/state/categories";
import { Categories } from "@/state/categories/reducers";

export interface CategoryEditListProps {
  categories: Categories;
  handleChangeCategoryName: (...props: any[]) => any;
  handleChangeBudget: (...props: any[]) => any;
  handleClickAddCategoryButton: (...props: any[]) => any;
  handleClickDeleteButton: (...props: any[]) => any;
}

const CategoryEditList: React.FC<CategoryEditListProps> = (props) => {
  const budgetEditItemProps = (
    categoryId: string,
    category: Category
  ): BudgetEditItemProps => {
    return {
      categoryName: category.name,
      budget: category.defaultBudget,
      handleChangeCategoryName: (newName: string): void => {
        props.handleChangeCategoryName(categoryId, newName);
      },
      handleChangeBudget: (newBudget: number): void => {
        props.handleChangeBudget(categoryId, newBudget);
      },
      handleClickDeleteButton: (): void => {
        props.handleClickDeleteButton(categoryId);
      },
    };
  };
  const textButtonProps: TextButtonProps = {
    text: "ADD CATEGORY",
    handleClick: props.handleClickAddCategoryButton,
  };

  return (
    <Container maxWidth="sm">
      <H6Title text="Default Category"></H6Title>
      {Object.entries(props.categories).map(([key, item]) => {
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

export default CategoryEditList;
