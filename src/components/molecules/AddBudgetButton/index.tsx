import React, { useState } from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import MonthInput, { MonthInputProps } from "@/components/atoms/MonthInput";

export interface AddBudgetButtonProps {
  addBudget: (yyyymm: string) => void;
}

const AddBudgetButton: React.FC<AddBudgetButtonProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const addButtonProps: TextButtonProps = {
    text: "予算を追加する",
    handleClick: () => {
      setIsOpen(true);
    },
  };

  const monthInputProps: MonthInputProps = {
    isOpen,
    handleChange: (date: Date) => {
      props.addBudget(moment(date).format("YYYYMM"));
    },
    handleClose: () => {
      setIsOpen(false);
    },
  };

  return (
    <>
      <Box padding="20px 0">
        <TextButton {...addButtonProps}></TextButton>
      </Box>
      <MonthInput {...monthInputProps}></MonthInput>
    </>
  );
};

export default AddBudgetButton;
