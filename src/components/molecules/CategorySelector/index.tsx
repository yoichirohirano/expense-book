import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";
import CategoryButton, {
  CategoryButtonProps,
} from "@/components/atoms/CategoryButton";
import { Category, Categories } from "@/state/categories";
import useStyles from "./style";

export interface CategorySelectorProps {
  categories: Categories;
  handleChangeCategory: (categoryId: string) => void;
  selectedCategoryId: string;
}

const CategorySelector: React.FC<CategorySelectorProps> = (props) => {
  const classes = useStyles();

  const categoryButtonProps = (
    category: Category,
    categoryId: string
  ): CategoryButtonProps => {
    return {
      selected: categoryId === props.selectedCategoryId,
      label: category.name,
      handleClick: (): void => {
        props.handleChangeCategory(categoryId);
      },
    };
  };

  return (
    <Box className={classes.root}>
      {Object.entries(props.categories).map(([categoryId, category]) => {
        return (
          <CategoryButton
            key={categoryId}
            {...categoryButtonProps(category, categoryId)}
          ></CategoryButton>
        );
      })}
    </Box>
  );
};

export default CategorySelector;
