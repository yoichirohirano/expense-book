import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./style";
export interface TextInputProps {
  label: string;
  type?: string;
  error: boolean;
  defaultValue?: string;
  helperText?: string;
  handleChange: (...props: any[]) => any;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const classes = useStyles();

  return (
    <TextField
      variant="outlined"
      onChange={(e) => {
        props.handleChange(e.target.value);
      }}
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
