import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import H6Title from "@/components/atoms/H6Title";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import { Category } from "@/state/categories";
import useStyles from "./style";

export interface CategoryEditListProps {
  categories: Array<Category>;
  handleChangeCategoryName: (props: unknown) => unknown;
  handleChangeBudget: (props: unknown) => unknown;
  handleClickAddCategoryButton: (props: unknown) => unknown;
  handleClickDeleteButton: (props: unknown) => unknown;
}

const CategoryEditList: React.FC<CategoryEditListProps> = (props) => {
  const classes = useStyles();

  const budgetEditItemProps = (category: Category): BudgetEditItemProps => {
    return {
      categoryName: category.name,
      budget: category.defaultBudget,
      handleChangeCategoryName: props.handleChangeCategoryName,
      handleChangeBudget: props.handleChangeBudget,
      handleClickDeleteButton: props.handleClickDeleteButton,
    };
  };
  const textButtonProps: TextButtonProps = {
    text: "ADD CATEGORY",
    handleClick: props.handleClickAddCategoryButton,
  };

  return (
    <Container maxWidth="sm">
      <H6Title text="Default Category"></H6Title>
      {props.categories.map((item, index) => {
        return (
          <BudgetEditItem
            key={index}
            {...budgetEditItemProps(item)}
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
