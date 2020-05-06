import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default useStyles;
