import React, { useEffect } from "react";
// ナビゲーションのみ例外的にatomからreduxへの接続を許容する
import { useSelector, useDispatch } from "react-redux";
import { push, RouterState } from "connected-react-router";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BarChartIcon from "@material-ui/icons/BarChart";
import ListIcon from "@material-ui/icons/List";
import SettingsIcon from "@material-ui/icons/Settings";
import { RootState } from "@/state/store";
import useStyles from "./style";

export interface NavigationProps {
  pathname: string;
  route: (index: number) => void;
}

export const routes = [
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

export const Navigation: React.FC<NavigationProps> = (props) => {
  const bottomNavigationClasses = useStyles("BottomNavigation");
  const bottomNavigationActionClasses = useStyles("BottomNavigationAction");
  // デフォルトでは何もアクティブにしないよう-1を設定
  const [index, setIndex] = React.useState(-1);
  // 初回レンダリング時、パスからカレントのインデックスを設定する
  useEffect(() => {
    const current = routes.find((item) => {
      // reduxを永続化しているため、カレントのパスをprops.pathnameから取得すると不整合が起こる場合がある。
      // このため、カレントのパスはlocationから取得する。
      return item.path === location.pathname;
    });
    setIndex(current ? current.index : 0);
  }, [props.pathname]);

  return (
    <BottomNavigation
      value={index}
      onChange={(event, index): void => {
        setIndex(index);
        props.route(index);
      }}
      classes={bottomNavigationClasses}
      showLabels
    >
      <BottomNavigationAction
        label="グラフ"
        icon={<BarChartIcon />}
        classes={bottomNavigationActionClasses}
      />
      <BottomNavigationAction
        label="一覧"
        icon={<ListIcon />}
        classes={bottomNavigationActionClasses}
      />
      <BottomNavigationAction
        label="予算"
        icon={<SettingsIcon />}
        classes={bottomNavigationActionClasses}
      />
      <BottomNavigationAction
        label="カテゴリ"
        icon={<SettingsIcon />}
        classes={bottomNavigationActionClasses}
      />
    </BottomNavigation>
  );
};

export const ConnectedNavigation: React.FC = () => {
  const router = useSelector<RootState, RouterState>((state) => state.router);
  const dispatch = useDispatch();
  const _props: NavigationProps = {
    pathname: router.location.pathname,
    route: (index: number): void => {
      const to = routes.find((item) => {
        return item.index === index;
      });
      if (to) dispatch(push(to.path));
    },
  };
  return <Navigation {..._props} />;
};

export default ConnectedNavigation;
