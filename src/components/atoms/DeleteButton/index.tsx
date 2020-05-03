import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  onClick: (props: any) => any;
  disabled?: boolean;
}

const DeleteButton: React.FC<Props> = (props) => {
  return (
    <IconButton
      aria-label="delete"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
