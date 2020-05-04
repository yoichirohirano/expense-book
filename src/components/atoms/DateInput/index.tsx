import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface Props {
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

const DateInput: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        disableToolbar
        inputVariant="outlined"
        value={selectedDate}
        onChange={(date): void => {
          setDateChange(date as Date);
          props.onChange(date);
        }}
        variant="inline"
        label="日付"
        classes={classes}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
