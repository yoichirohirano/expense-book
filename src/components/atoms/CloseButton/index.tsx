import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
interface CloseButtonProps {
  onClick: (props: any) => any;
}

const CloseButton: React.FC<CloseButtonProps> = (props) => {
  return (
    <IconButton onClick={props.onClick} color="primary">
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
