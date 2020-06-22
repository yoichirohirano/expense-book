import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "./style";
export interface DateInputProps {
  handleChange: (date: Date) => void;
  defaultTimestamp?: number;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const classes = useStyles();
  const [selectedDate, setDateChange] = useState(new Date());

  // 初回のみデフォルト日付をpropsから設定
  useEffect(() => {
    if (props.defaultTimestamp) {
      setDateChange(new Date(props.defaultTimestamp));
    }
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        disableToolbar
        inputVariant="outlined"
        format="yyyy/MM/dd"
        value={selectedDate}
        onChange={(date): void => {
          setDateChange(date as Date);
          props.handleChange(date as Date);
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
