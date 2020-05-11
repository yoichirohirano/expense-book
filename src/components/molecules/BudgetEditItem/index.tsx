import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextInput from "@/components/atoms/TextInput";
import DeleteButton from "@/components/atoms/DeleteButton";
import useStyles from "./style";

export type BudgetEditItemInfo = {
  categoryName: string;
  budget: number;
};

export interface BudgetEditItemProps extends BudgetEditItemInfo {
  handleChangeCategoryName: (...props: any[]) => any;
  handleChangeBudget: (...props: any[]) => any;
  handleClickDeleteButton?: (...props: any[]) => any;
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
          defaultValue={props.budget ? props.budget.toString() : ""}
          handleChange={props.handleChangeBudget}
          helperText={priceError ? "入力してください。" : ""}
          error={priceError}
        ></TextInput>
      </Box>
      <Box className={classes.deleteButtonWrapper}>
        <DeleteButton
          handleClick={
            props.handleClickDeleteButton
              ? props.handleClickDeleteButton
              : undefined
          }
          disabled={props.handleClickDeleteButton ? false : true}
        ></DeleteButton>
      </Box>
    </Box>
  );
};

export default BudgetEditItem;
