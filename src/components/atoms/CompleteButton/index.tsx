import React from "react";
import Fab from "@material-ui/core/Fab";
import DoneIcon from "@material-ui/icons/Done";
interface CompleteButtonProps {
  onClick: (props: any) => any;
}

const CompleteButton: React.FC<CompleteButtonProps> = (props) => {
  return (
    <Fab onClick={props.onClick} color="primary">
      <DoneIcon />
    </Fab>
  );
};

export default CompleteButton;
