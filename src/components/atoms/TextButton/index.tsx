import React from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./style";

export interface TextButtonProps {
  text: string;
  handleClick: (...props: any[]) => any;
}

const TextButton: React.FC<TextButtonProps> = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="outlined"
      color="primary"
      size="large"
      className={classes.root}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
};

export default TextButton;
