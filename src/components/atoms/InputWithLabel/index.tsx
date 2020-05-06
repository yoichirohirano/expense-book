import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
export interface InputWithLabelProps {
  label: string;
  type?: string;
  defaultValue?: string;
  handleChange: (props: unknown) => unknown;
}

const InputWithLabel: React.FC<InputWithLabelProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      onChange={props.handleChange}
      label={props.label}
      defaultValue={props.defaultValue || ""}
      type={props.type || "text"}
      className={classes.root}
    />
  );
};

export default InputWithLabel;
