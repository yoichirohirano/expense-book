import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const usePanelClasses = makeStyles(() => {
  return {
    root: {
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
      },
    },
    expanded: {},
  };
});

export const usePanelSummaryClasses = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      justifyContent: "space-between",
      "&$expanded": {
        margin: "12px 0",
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    expanded: {},
  })
);

export const usePanelDetailsClasses = makeStyles(() =>
  createStyles({
    root: {
      display: "block",
    },
  })
);
