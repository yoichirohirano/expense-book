import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

interface H6TitleProps {
  text: string;
}

const H6Title: React.FC<H6TitleProps> = (props) => {
  const classes = useStyles();
  return (
    <Typography variant="h6" className={`H6Title ${classes.root}`}>
      {props.text}
    </Typography>
  );
};

export default H6Title;
