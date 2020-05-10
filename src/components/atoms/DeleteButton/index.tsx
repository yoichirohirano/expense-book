import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface DeleteButtonProps {
  handleClick: (props: any) => any;
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return (
    <IconButton onClick={props.handleClick} color="primary">
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
