import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

interface Props {
  months: Array<string>;
}

const tabParam = (index: number): Record<string, any> => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const MonthTabs: React.FC<Props> = (props) => {
  const theme = useTheme();
  const tabsWrapperClasses = makeStyles({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number
  ): void => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={tabsWrapperClasses.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {props.months.map((item, index) => {
            return <Tab key={index} label={item} {...tabParam(index)} />;
          })}
        </Tabs>
      </AppBar>
    </div>
  );
};

export default MonthTabs;
