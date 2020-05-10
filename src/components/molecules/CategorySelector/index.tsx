import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import CategoryButton, {
  CategoryButtonProps,
} from "@/components/atoms/CategoryButton";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Category } from "@/state/categories";

interface CategorySelectorProps {
  categories: Array<Category>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  })
);

const CategorySelector: React.FC<CategorySelectorProps> = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const categoryButtonProps = (
    category: Category,
    index: number
  ): CategoryButtonProps => {
    return {
      selected: index === selectedIndex,
      label: category.name,
      handleClick: (): void => {
        setSelectedIndex(index);
      },
    };
  };

  return (
    <Box className={classes.root}>
      {props.categories.map((category, index) => {
        return (
          <CategoryButton
            key={index}
            {...categoryButtonProps(category, index)}
          ></CategoryButton>
        );
      })}
    </Box>
  );
};

export default CategorySelector;
