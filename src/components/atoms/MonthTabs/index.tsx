import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./style";

interface MonthTabsProps {
  months: Array<string>;
  handleChange: (props: unknown) => unknown;
}

const tabProps = (index: number): Record<string, any> => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const MonthTabs: React.FC<MonthTabsProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const onChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
    props.handleChange(newValue);
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={onChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {props.months.map((item, index) => {
            return <Tab key={index} label={item} {...tabProps(index)} />;
          })}
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default MonthTabs;
