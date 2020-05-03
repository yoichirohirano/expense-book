import React from "react";
import Box from "@material-ui/core/Box";
import CategoryButton from "@/components/atoms/CategoryButton";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Category } from "@/components/atoms/Chart";
import { PropTypes } from "@material-ui/core";

interface Props {
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

const CategorySelector: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {props.categories.map((category, index) => {
        const props = {
          color: "primary" as PropTypes.Color,
          label: category.label,
          onClick: () => {
            return true;
          },
        };
        return <CategoryButton key={index} {...props}></CategoryButton>;
      })}
    </Box>
  );
};

export default CategorySelector;
