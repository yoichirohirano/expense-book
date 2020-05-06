import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
export interface TextInputProps {
  label: string;
  type?: string;
  error: boolean;
  defaultValue?: string;
  helperText?: string;
  handleChange: (props: unknown) => unknown;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      onChange={props.handleChange}
      label={props.label}
      defaultValue={props.defaultValue || ""}
      error={props.error}
      helperText={props.helperText}
      type={props.type || "text"}
      className={classes.root}
    />
  );
};

export default TextInput;
