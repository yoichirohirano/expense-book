import React from "react";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";

interface DeleteButtonProps {
  handleClick: (props: any) => any;
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return (
    <Fab onClick={props.handleClick}>
      <DeleteIcon />
    </Fab>
  );
};

export default DeleteButton;
