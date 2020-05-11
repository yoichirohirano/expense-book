import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export interface AddButtonProps {
  handleClick: (props: unknown) => unknown;
}

const AddButton: React.FC<AddButtonProps> = (props) => {
  return (
    <Fab onClick={props.handleClick} color="secondary" className="AddButton">
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
