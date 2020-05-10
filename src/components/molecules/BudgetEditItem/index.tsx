import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextInput from "@/components/atoms/TextInput";
import DeleteButton from "@/components/atoms/DeleteButton";
import useStyles from "./style";

export interface BudgetEditItemProps {
  categoryName: string;
  budget: number;
  handleChangeCategoryName: (props: unknown) => unknown;
  handleChangeBudget: (props: unknown) => unknown;
  handleClickDeleteButton: (props: unknown) => unknown;
}

const BudgetEditItem: React.FC<BudgetEditItemProps> = (props) => {
  const classes = useStyles();
  const [itemNameError, setItemNameError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  return (
    <Box className={classes.root}>
      <Box className={classes.inputArea}>
        <TextInput
          label="カテゴリ名"
          defaultValue={props.categoryName}
          handleChange={props.handleChangeCategoryName}
          error={itemNameError}
          helperText={itemNameError ? "入力してください。" : ""}
        ></TextInput>
        <TextInput
          label="金額"
          type="number"
          defaultValue={props.budget.toString()}
          handleChange={props.handleChangeBudget}
          helperText={priceError ? "入力してください。" : ""}
          error={priceError}
        ></TextInput>
      </Box>
      <Box className={classes.deleteButtonWrapper}>
        <DeleteButton
          handleClick={props.handleClickDeleteButton}
        ></DeleteButton>
      </Box>
    </Box>
  );
};

export default BudgetEditItem;
