import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextInput from "@/components/atoms/TextInput";
import DateInput from "@/components/atoms/DateInput";
import H6Title from "@/components/atoms/H6Title";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import { Category } from "components/atoms/ExpenseChart";
import CategorySelector from "@/components/molecules/CategorySelector";
import useStyles from "./style";

interface AddItemDrawerProps {
  categories: Array<Category>;
  title: string;
  isEditItem: boolean;
  isOpen: boolean;
  toggleDrawer: (props: boolean) => void;
}

const AddItemDrawer: React.FC<AddItemDrawerProps> = (props) => {
  const classes = useStyles();
  const [itemNameError, setItemNameError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  const handleChangeItemName = (e) => {
    console.log(e.target.value);
  };

  const handleChangePrice = (e) => {
    console.log(e.target.value);
  };

  const handleChangeDate = (e) => {
    console.log(e.target.value);
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
          <CategorySelector categories={props.categories}></CategorySelector>
        </Box>
        <Box className={classes.inputArea}>
          <TextInput
            label="アイテム名"
            handleChange={handleChangeItemName}
            error={itemNameError}
            helperText={itemNameError ? "入力してください。" : ""}
          ></TextInput>
          <TextInput
            label="金額"
            type="number"
            handleChange={handleChangePrice}
            helperText={priceError ? "入力してください。" : ""}
            error={priceError}
          ></TextInput>
          <DateInput handleChange={handleChangeDate}></DateInput>
        </Box>
      </Container>
      <Box className={classes.completeButtonWrapper}>
        <CompleteButton
          handleClick={() => {
            props.toggleDrawer(false);
          }}
        ></CompleteButton>
      </Box>
      {props.isEditItem && (
        <Box className={classes.deleteButtonWrapper}>
          <DeleteButton
            handleClick={() => {
              props.toggleDrawer(false);
            }}
          ></DeleteButton>
        </Box>
      )}
    </SwipeableDrawer>
  );
};

export default AddItemDrawer;
