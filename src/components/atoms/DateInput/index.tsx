import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

interface Props {
  onChange: (props: any) => any;
}

const DateInput: React.FC<Props> = (props) => {
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        value={selectedDate}
        onChange={(date) => {
          setDateChange(date);
          props.onChange(date);
        }}
        variant="inline"
        label="日付"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
