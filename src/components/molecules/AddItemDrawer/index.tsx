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
import { makeStyles } from "@material-ui/core/styles";
// interface AddItemDrawerProps {
//   onClick: (props: any) => any;
// }

const completeButtonWrapperStyle = {
  position: "fixed",
  right: "20px",
  bottom: "20px",
};

const deleteButtonWrapperStyle = {
  position: "fixed",
  right: "92px",
  bottom: "20px",
};

const closeButtonWrapperStyle = {
  position: "absolute",
  top: "8px",
  left: "0px",
};

interface AddItemDrawerProps {
  categories: Array<Category>;
  title: string;
  isEdit: boolean;
  isOpen: boolean;
  toggleDrawer: Function;
}

const useStyles = makeStyles({
  root: {
    paddingBottom: "20px",
  },
});

const AddItemDrawer: React.FC<AddItemDrawerProps> = (props) => {
  const inputContainerClasses = useStyles();

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open={props.isOpen}
        onClose={props.toggleDrawer(false)}
        onOpen={props.toggleDrawer(true)}
      >
        <div role="presentation">
          <Box css={closeButtonWrapperStyle}>
            <CloseButton onClick={props.toggleDrawer(false)}></CloseButton>
          </Box>
          <Container maxWidth="sm" classes={inputContainerClasses}>
            <H6Title text={props.title}></H6Title>
            <Box padding="8px 0">
              <CategorySelector
                categories={props.categories}
              ></CategorySelector>
            </Box>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
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
              <DateInput onChange={() => {}}></DateInput>
            </Box>
          </Container>
          <Box css={completeButtonWrapperStyle}>
            <CompleteButton
              onClick={props.toggleDrawer(false)}
            ></CompleteButton>
          </Box>
          {props.isEdit && (
            <Box css={deleteButtonWrapperStyle}>
              <DeleteButton onClick={props.toggleDrawer(false)}></DeleteButton>
            </Box>
          )}
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default AddItemDrawer;
