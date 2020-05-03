import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
interface Props {
  onClick: (props: any) => any;
}

const AddButton: React.FC<Props> = (props) => {
  return (
    <Fab onClick={props.onClick} color="secondary">
      <AddIcon />
    </Fab>
  );
};

export default AddButton;
