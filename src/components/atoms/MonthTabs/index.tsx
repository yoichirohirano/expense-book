import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./style";

export interface MonthTabsProps {
  months: Array<string>;
  currentIndex: number;
  handleChange: (props: number) => unknown;
}

const MonthTabs: React.FC<MonthTabsProps> = (props) => {
  const classes = useStyles();
  const onChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    props.handleChange(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={props.currentIndex}
          onChange={onChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
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
