import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import CategoryButton, {
  CategoryButtonProps,
} from "@/components/atoms/CategoryButton";
import { Category, Categories } from "@/state/categories";
import useStyles from "./style";

interface CategorySelectorProps {
  categories: Categories;
  handleChangeCategory: (...props: any[]) => any;
}

const CategorySelector: React.FC<CategorySelectorProps> = (props) => {
  const classes = useStyles();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");

  useEffect(() => {
    // 初期表示時、先頭のカテゴリを指定
    setSelectedCategoryId(Object.keys(props.categories)[0]);
  }, []);

  const categoryButtonProps = (
    category: Category,
    categoryId: string
  ): CategoryButtonProps => {
    return {
      selected: categoryId === selectedCategoryId,
      label: category.name,
      handleClick: (): void => {
        setSelectedCategoryId(categoryId);
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
