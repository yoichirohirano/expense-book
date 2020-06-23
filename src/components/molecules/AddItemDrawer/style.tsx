import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      zIndex: 2,
    },
    closeButtonWrapper: {
      position: "absolute",
      top: "8px",
      left: "0px",
      zIndex: 3,
    },
    completeButtonWrapper: {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      zIndex: 3,
    },
    deleteButtonWrapper: {
      position: "fixed",
      right: "92px",
      bottom: "20px",
      zIndex: 3,
    },
    inputArea: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      alignItems: "center",
      paddingBottom: "20px",
    },
    categorySelectorWrapper: {
      padding: "8px 0",
    },
  })
);

export default useStyles;
