import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface DeleteButtonProps {
  handleClick?: () => void;
  disabled?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  return (
    <IconButton
      onClick={props.handleClick}
      color="primary"
      disabled={props.disabled || false}
      className="DeleteButton"
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
