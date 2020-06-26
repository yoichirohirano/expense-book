import React from "react";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import useStyles from "./style";

export interface AmountInputProps {
  label: string;
  error: boolean;
  defaultValue?: string;
  helperText?: string;
  handleChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = (props) => {
  const classes = useStyles();

  const handleChange = ({ value }: { value: string }): void => {
    props.handleChange && props.handleChange(value);
  };

  return (
    <NumberFormat
      prefix="¥"
      thousandSeparator={true}
      isNumericString={true}
      customInput={TextField}
      variant="outlined"
      onValueChange={handleChange}
      defaultValue={props.defaultValue || ""}
      error={props.error}
      helperText={props.helperText}
      label={props.label}
      disabled={props.disabled || false}
      className={`AmountInput ${props.className && props.className} ${
        classes.root
      }`}
    />
  );
};

export default AmountInput;
