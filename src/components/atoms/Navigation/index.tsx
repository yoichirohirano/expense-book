import React, { useEffect } from "react";
// ナビゲーションのみ例外的にatomからreduxへの接続を許容する
import { connect, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BarChartIcon from "@material-ui/icons/BarChart";
import ListIcon from "@material-ui/icons/List";
import SettingsIcon from "@material-ui/icons/Settings";
import useStyles from "./style";

export interface NavigationProps {
  pathname: string;
  routes: Array<{
    path: string;
    index: number;
  }>;
}

const routes = [
  {
    path: "/",
    index: 0,
  },
  {
    path: "/list",
    index: 1,
  },
  {
    path: "/budget",
    index: 2,
  },
  {
    path: "/category",
    index: 3,
  },
];

const mapStateToProps = (state: any): NavigationProps => ({
  pathname: state.router.location.pathname,
  routes,
});

const Navigation: React.FC<NavigationProps> = (props) => {
  const bottomNavigationClasses = useStyles("BottomNavigation");
  const bottomNavigationActionClasses = useStyles("BottomNavigationAction");
  const [index, setIndex] = React.useState(0);
  const dispatch = useDispatch();

  // 初回レンダリング時、パスからカレントのインデックスを設定する
  useEffect(() => {
    const current = props.routes.find((item) => {
      return item.path === props.pathname;
    });
    setIndex(current ? current.index : 0);
  }, []);

  const route = (index: number): void => {
    const to = props.routes.find((item) => {
      return item.index === index;
    });
    if (to) dispatch(push(to.path));
  };

  return (
    <BottomNavigation
      value={index}
      onChange={(event, index): void => {
        setIndex(index);
        route(index);
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

export default connect(mapStateToProps)(Navigation);
