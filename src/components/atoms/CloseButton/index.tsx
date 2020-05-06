import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
interface CloseButtonProps {
  handleClick: (props: unknown) => unknown;
}

const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <IconButton onClick={props.handleClick} color="primary">
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
