import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextInput, { TextInputProps } from "@/components/atoms/TextInput";
import AmountInput, { AmountInputProps } from "@/components/atoms/AmountInput";
import DeleteButton from "@/components/atoms/DeleteButton";
import useStyles from "./style";

export interface BudgetEditItemProps {
  categoryName: string;
  budget: number;
  handleChangeCategoryName: (value: string) => void;
  handleChangeBudget: (value: string) => void;
  handleClickDeleteButton?: () => void;
  categoryEditDisabled?: boolean;
  deleteDisabled?: boolean;
}

const BudgetEditItem: React.FC<BudgetEditItemProps> = (props) => {
  const classes = useStyles();
  const [itemNameError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  const categoryInputProps: TextInputProps = {
    label: "カテゴリ名",
    defaultValue: props.categoryName,
    handleChange: props.handleChangeCategoryName,
    error: itemNameError,
    helperText: itemNameError ? "入力してください。" : "",
    disabled: props.categoryEditDisabled,
  };

  const amountInputProps: AmountInputProps = {
    label: "金額",
    defaultValue: props.budget ? props.budget.toString() : "",
    handleChange: (value: string) => {
      setPriceError(value ? false : true);
      props.handleChangeBudget(value);
    },
    helperText: priceError ? "入力してください。" : "",
    error: priceError,
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.inputArea}>
        <TextInput {...categoryInputProps}></TextInput>
        <AmountInput {...amountInputProps}></AmountInput>
      </Box>
      <Box className={classes.deleteButtonWrapper}>
        <DeleteButton
          handleClick={props.handleClickDeleteButton || undefined}
          disabled={props.deleteDisabled || false}
        ></DeleteButton>
      </Box>
    </Box>
  );
};

export default BudgetEditItem;
