import React from "react";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
  label: string;
  type?: string;
  defaultValue?: string;
  onChange: (props: any) => any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "calc(50% - 8px)",
      marginTop: "20px",
      "& > *": {
        margin: `${theme.spacing(1)} 0`,
      },
    },
  })
);

const InputWithLabel: React.FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      onChange={props.onChange}
      label={props.label}
      defaultValue={props.defaultValue || ""}
      type={props.type || "text"}
      classes={classes}
    />
  );
};

export default InputWithLabel;
