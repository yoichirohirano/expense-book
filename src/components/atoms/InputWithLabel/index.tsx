import React from "react";
import TextField from "@material-ui/core/TextField";

interface Props {
  label: string;
  type?: string;
  onChange: (props: any) => any;
}

const InputWithLabel: React.FC<Props> = (props) => {
  return (
    <TextField
      onChange={props.onChange}
      label={props.label}
      type={props.type || "text"}
    />
  );
};

export default InputWithLabel;
