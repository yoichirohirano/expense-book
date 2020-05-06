import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = (module: string): Record<string, any> => {
  switch (module) {
    case "BottomNavigation":
      return makeStyles((theme: Theme) =>
        createStyles({
          root: {
            width: "100vw",
            background: theme.palette.primary.dark,
          },
        })
      )();
    case "BottomNavigationAction":
      return makeStyles((theme: Theme) => {
        return createStyles({
          selected: {
            // importantしないと優先度で負ける
            color: "#fff !important",
          },
          iconOnly: {
            color: theme.palette.primary.light,
          },
        });
      })();
    default:
      return makeStyles({})();
  }
};

export default useStyles;
