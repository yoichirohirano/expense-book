import React from "react";
import Chip from "@material-ui/core/Chip";
import { PropTypes } from "@material-ui/core";

interface Props {
  color: PropTypes.Color;
  label: string;
  onClick: (props: any) => any;
}

const CategoryButton: React.FC<Props> = (props) => {
  return (
    <Chip color={props.color} label={props.label} onClick={props.onClick} />
  );
};

export default CategoryButton;
