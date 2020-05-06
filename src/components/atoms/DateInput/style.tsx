import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    datePicker: {
      width: "calc(50% - 8px)",
      marginTop: "20px",
      "& > *": {
        margin: `${theme.spacing(1)} 0`,
      },
    },
  })
);
export default useStyles;
