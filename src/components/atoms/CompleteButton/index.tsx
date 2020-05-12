import React from "react";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
interface CompleteButtonProps {
  handleClick: (props: unknown) => unknown;
}

const CompleteButton: React.FC<CompleteButtonProps> = (props) => {
  return (
    <Fab
      onClick={props.handleClick}
      color="secondary"
      className="CompleteButton"
    >
      <DoneIcon />
    </Fab>
  );
};

export default CompleteButton;
