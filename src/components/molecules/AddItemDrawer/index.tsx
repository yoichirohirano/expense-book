import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import InputWithLabel from "@/components/atoms/InputWithLabel";
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
      <Container maxWidth="sm" className={classes.inputFlexContainer}>
        <H6Title text={props.title}></H6Title>
        <Box padding="8px 0">
          <CategorySelector categories={props.categories}></CategorySelector>
        </Box>
        <Box className={classes.inputFlexContainer}>
          <InputWithLabel
            label="アイテム名"
            defaultValue="スタバ"
            onChange={() => {}}
          ></InputWithLabel>
          <InputWithLabel
            label="金額"
            defaultValue="300"
            type="number"
            onChange={() => {}}
          ></InputWithLabel>
          <DateInput handleChange={() => {}}></DateInput>
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
