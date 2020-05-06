import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    // TODO: フォント設定だけ反映されない問題
    // fontFamily: "h2.fontFamily",
    lineHeight: "1.5",
    justifyContent: "center",
    paddingTop: "10px",
  },
});

export default useStyles;
