import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BarChartIcon from "@material-ui/icons/BarChart";
import ListIcon from "@material-ui/icons/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Navigation: React.FC = () => {
  const theme = useTheme();
  const bottomNavigationClasses = makeStyles({
    root: {
      width: "100vw",
      background: theme.palette.primary.dark,
    },
  })();
  const bottomNavigationActionClasses = makeStyles({
    selected: {
      // importantしないと優先度で負ける
      color: "#fff !important",
    },
    iconOnly: {
      color: theme.palette.primary.light,
    },
  })();

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
        label="Account"
        icon={<AccountCircleIcon />}
        classes={bottomNavigationActionClasses}
      />
    </BottomNavigation>
  );
};

export default Navigation;
