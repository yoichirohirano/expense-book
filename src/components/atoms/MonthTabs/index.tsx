import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./style";

export interface MonthTabsProps {
  months: Array<string>;
  handleChange: (props: number) => unknown;
  initialMonthIndex?: number;
}

const MonthTabs: React.FC<MonthTabsProps> = (props) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // カレントをpropsから設定
  useEffect(() => {
    if (props.initialMonthIndex || props.initialMonthIndex === 0) {
      setCurrentIndex(props.initialMonthIndex);
    }
  }, [props]);

  const onChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    setCurrentIndex(newValue);
    props.handleChange(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={currentIndex}
          onChange={onChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          className="MonthTabs-Tabs"
        >
          {props.months.map((item, index) => {
            return (
              <Tab
                key={index}
                label={item}
                id={`scrollable-auto-tab-${index}`}
              />
            );
          })}
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default MonthTabs;
