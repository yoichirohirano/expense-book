import React from "react";
import Chip from "@material-ui/core/Chip";

export interface CategoryButtonProps {
  selected: boolean;
  label: string;
  handleClick: (props: unknown) => unknown;
}

const CategoryButton: React.FC<CategoryButtonProps> = (props) => {
  return (
    <Chip
      color={props.selected ? "secondary" : "primary"}
      label={props.label}
      onClick={props.handleClick}
      className="CategoryButton"
    />
  );
};

export default CategoryButton;
