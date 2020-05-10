import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    inputArea: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "calc(100% - 60px)",
    },
    deleteButtonWrapper: {
      margin: "20px 0 0 10px",
    },
  })
);

export default useStyles;
