import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import InputWithLabel from "@/components/atoms/InputWithLabel";
import DateInput from "@/components/atoms/DateInput";
import H6Title from "@/components/atoms/H6Title";
import AddButton from "@/components/atoms/AddButton";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import { Category } from "@/components/atoms/Chart";
import CategorySelector from "@/components/molecules/CategorySelector";
import { makeStyles } from "@material-ui/core/styles";
// interface AddItemDrawerProps {
//   onClick: (props: any) => any;
// }

interface AddItemDrawerProps {
  categories: Array<Category>;
  title: string;
}

const addButtonWrapperStyle = {
  position: "fixed",
  right: "20px",
  bottom: "76px",
};

const completeButtonWrapperStyle = {
  position: "fixed",
  right: "20px",
  bottom: "20px",
};

const closeButtonWrapperStyle = {
  position: "absolute",
  top: "8px",
  left: "0px",
};

const useStyles = makeStyles({
  root: {
    paddingBottom: "20px",
  },
});

const AddItemDrawer: React.FC<AddItemDrawerProps> = (props) => {
  const inputContainerClasses = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ): void => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <>
      <Box css={addButtonWrapperStyle}>
        <AddButton onClick={toggleDrawer(true)}></AddButton>
      </Box>
      <SwipeableDrawer
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div role="presentation">
          <Box css={closeButtonWrapperStyle}>
            <CloseButton onClick={toggleDrawer(false)}></CloseButton>
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
            <CompleteButton onClick={toggleDrawer(false)}></CompleteButton>
          </Box>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default AddItemDrawer;
