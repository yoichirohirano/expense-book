import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BarChartIcon from "@material-ui/icons/BarChart";
import ListIcon from "@material-ui/icons/List";
import SettingsIcon from "@material-ui/icons/Settings";
import useStyles from "./style";

const Navigation: React.FC = () => {
  const bottomNavigationClasses = useStyles("BottomNavigation");
  const bottomNavigationActionClasses = useStyles("BottomNavigationAction");
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      classes={bottomNavigationClasses}
      showLabels
    >
      <BottomNavigationAction
        label="Chart"
        icon={<BarChartIcon />}
        classes={bottomNavigationActionClasses}
      />
      <BottomNavigationAction
        label="List"
        icon={<ListIcon />}
        classes={bottomNavigationActionClasses}
      />
      <BottomNavigationAction
        label="Budget"
        icon={<SettingsIcon />}
        classes={bottomNavigationActionClasses}
      />
      <BottomNavigationAction
        label="Category"
        icon={<SettingsIcon />}
        classes={bottomNavigationActionClasses}
      />
    </BottomNavigation>
  );
};

export default Navigation;
