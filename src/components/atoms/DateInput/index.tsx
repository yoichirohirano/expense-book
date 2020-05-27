import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "./style";
export interface DateInputProps {
  handleChange: (...props: any[]) => any;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const classes = useStyles();
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        disableToolbar
        inputVariant="outlined"
        format="yyyy/MM/dd"
        value={selectedDate}
        onChange={(date): void => {
          setDateChange(date as Date);
          props.handleChange(date);
        }}
        variant="inline"
        label="日付"
        autoOk={true}
        className={`DateInput-datepicker ${classes.datePicker}`}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
