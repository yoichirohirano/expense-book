import React from "react";
import Chip from "@material-ui/core/Chip";

export interface CategoryButtonProps {
  selected: boolean;
  label: string;
  onClick: (props: any) => any;
}

const CategoryButton: React.FC<CategoryButtonProps> = (props) => {
  return (
    <Chip
      color={props.selected ? "secondary" : "primary"}
      label={props.label}
      onClick={props.onClick}
    />
  );
};

export default CategoryButton;
