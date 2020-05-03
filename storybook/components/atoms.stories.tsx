import React from "react";
import AddButton from "@/components/atoms/AddButton";
import TextButton from "@/components/atoms/TextButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import Navigation from "@/components/atoms/Navigation";
import MonthTabs from "@/components/atoms/MonthTabs";

const props = {
  onClick: (): boolean => {
    return true;
  },
  text: "BUTTON",
};

export const navigation = () => {
  return <Navigation></Navigation>;
};
export const addButton = () => {
  return <AddButton {...props}></AddButton>;
};
export const removeButton = () => {
  return <TextButton {...props} text="REMOVE"></TextButton>;
};
export const deleteButton = () => {
  return <DeleteButton {...props}></DeleteButton>;
};
export const deleteButtonDisabled = () => {
  return <DeleteButton {...props} disabled={true}></DeleteButton>;
};
export const monthTabs = () => {
  const months = ["2020/03", "2020/04", "2020/05", "2020/06", "2020/07"];
  return <MonthTabs {...props} disabled={true} months={months}></MonthTabs>;
};

export default {
  title: "atoms",
};
