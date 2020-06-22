import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export interface TextButtonProps {
  text: string;
  handleClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isNegative?: boolean;
}

const TextButton: React.FC<TextButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant={props.isNegative ? "contained" : "outlined"}
      color={props.isNegative ? "default" : "primary"}
      size="large"
      className={`TextButton ${classes.root}`}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
};

export default TextButton;
