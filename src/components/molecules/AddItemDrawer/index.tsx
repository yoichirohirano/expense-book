import React, { useState, useEffect } from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextInput from "@/components/atoms/TextInput";
import DateInput from "@/components/atoms/DateInput";
import H6Title from "@/components/atoms/H6Title";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import { Categories } from "@/state/categories";
import { Expense } from "@/state/expenses";
import CategorySelector from "@/components/molecules/CategorySelector";
import useStyles from "./style";

export interface AddItemDrawerProps {
  categories: Categories;
  title: string;
  isOpen: boolean;
  editItemId?: string;
  editingItem?: Expense;
  toggleDrawer: (props: boolean) => void;
  add: (props: Expense) => void;
  delete?: (...props: any[]) => any;
}

const AddItemDrawer: React.FC<AddItemDrawerProps> = (props) => {
  const classes = useStyles();

  const [name, setName] = useState(props.editingItem?.name || "");
  const [amount, setAmount] = useState(props.editingItem?.amount || 0);
  const [date, setDate] = useState(
    props.editingItem?.date || moment(new Date()).format("YYYYMMDDTHHmmSS")
  );
  const [category, setCategory] = useState(
    props.editingItem?.category || Object.keys(props.categories)[0]
  );
  const [itemNameError, setItemNameError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  // 編集時、デフォルトをpropsから設定
  useEffect(() => {
    if (props.editingItem) {
      console.log(props.editingItem.category);
      setName(props.editingItem.name);
      setAmount(props.editingItem.amount);
      setDate(props.editingItem.date);
      setCategory(props.editingItem.category);
    }
  }, [props.editingItem]);

  const validate = (): void => {
    setItemNameError(!name);
    setPriceError(!amount || amount < 0);
  };

  const handleClickCompleteButton = (): void => {
    validate();
    if (name && amount) {
      props.add({
        category,
        name,
        amount,
        date,
      });
      props.toggleDrawer(false);
    }
  };

  const handleClickDeleteButton = (): void => {
    props.delete && props.delete();
    props.toggleDrawer(false);
  };

  const nameInputProps = {
    label: "アイテム名",
    handleChange: setName,
    error: itemNameError,
    helperText: itemNameError ? "入力してください。" : "",
    className: "ItemNameInput",
    defaultValue: name,
  };

  const amountInputProps = {
    label: "金額",
    type: "number",
    handleChange: setAmount,
    helperText: priceError ? "入力してください。" : "",
    error: priceError,
    className: "PriceInput",
    defaultValue: amount.toString(),
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.isOpen}
      onClose={() => {
        props.toggleDrawer(false);
      }}
      onOpen={() => {
        props.toggleDrawer(true);
      }}
    >
      <Box className={classes.closeButtonWrapper}>
        <CloseButton
          handleClick={() => {
            props.toggleDrawer(false);
          }}
        ></CloseButton>
      </Box>
      <Container maxWidth="sm">
        <H6Title text={props.title}></H6Title>
        <Box className={classes.categorySelectorWrapper}>
          <CategorySelector
            categories={props.categories}
            handleChangeCategory={setCategory}
          ></CategorySelector>
        </Box>
        <Box className={classes.inputArea}>
          <TextInput {...nameInputProps}></TextInput>
          <TextInput {...amountInputProps}></TextInput>
          <DateInput
            handleChange={(date: Date): void => {
              setDate(moment(date).format("YYYYMMDDTHHmmSS"));
            }}
            defaultTimestamp={moment(date).valueOf()}
          ></DateInput>
        </Box>
      </Container>
      <Box className={classes.completeButtonWrapper}>
        <CompleteButton
          handleClick={handleClickCompleteButton}
        ></CompleteButton>
      </Box>
      {props.editItemId && (
        <Box className={classes.deleteButtonWrapper}>
          <DeleteButton handleClick={handleClickDeleteButton}></DeleteButton>
        </Box>
      )}
    </SwipeableDrawer>
  );
};

export default AddItemDrawer;
