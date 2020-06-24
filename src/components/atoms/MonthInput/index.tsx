import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import ja from "date-fns/locale/ja";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "./style";

export interface MonthInputProps {
  handleChange: (date: Date) => void;
  defaultTimestamp?: number;
}

const MonthInput: React.FC<MonthInputProps> = (props) => {
  const classes = useStyles();
  const [selectedDate, setDateChange] = useState(new Date());

  // 初回のみデフォルト日付をpropsから設定
  useEffect(() => {
    if (props.defaultTimestamp) {
      setDateChange(new Date(props.defaultTimestamp));
    }
  }, []);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ja}>
      <DatePicker
        inputVariant="outlined"
        format="yyyy/MM"
        value={selectedDate}
        views={["year", "month"]}
        openTo="month"
        onChange={(date): void => {
          setDateChange(date as Date);
          props.handleChange(date as Date);
        }}
        variant="inline"
        label="年月"
        autoOk={true}
        className={`MonthInput-datepicker ${classes.datePicker}`}
      />
    </MuiPickersUtilsProvider>
  );
};

export default MonthInput;
