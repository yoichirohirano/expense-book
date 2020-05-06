import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: "20px",
    },
    closeButtonWrapper: {
      position: "absolute",
      top: "8px",
      left: "0px",
    },
    completeButtonWrapper: {
      position: "fixed",
      right: "20px",
      bottom: "20px",
    },
    deleteButtonWrapper: {
      position: "fixed",
      right: "92px",
      bottom: "20px",
    },
    inputArea: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      paddingBottom: "20px",
    },
    categorySelectorWrapper: {
      padding: "8px 0",
    },
  })
);

export default useStyles;
