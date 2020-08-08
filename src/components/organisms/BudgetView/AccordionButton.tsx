import React from "react";
import { ExpansionPanelSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import getPriceSeparatedByComma from "@/util/functions/getPriceSeparatedByComma";
import { usePanelSummaryClasses } from "./style";

import { budgetsSelectors, Budgets } from "@/state/budgets";

const yyyymmWithSlash = (yyyymm: string): string => {
  const matchList = yyyymm.match(/(\d{4})(\d{2})/);
  return matchList ? `${matchList[1]}/${matchList[2]}` : yyyymm;
};

const AccordionButton = (props: {
  yyyymm: string;
  budgets: Budgets;
}): JSX.Element => {
  const panelSummaryClasses = usePanelSummaryClasses();
  const budgetAmount = (budgets: Budgets, month: string): string => {
    return getPriceSeparatedByComma(
      budgetsSelectors.getBudgetAmount(budgets, month)
    );
  };

  return (
    <ExpansionPanelSummary
      classes={{
        root: panelSummaryClasses.root,
        content: panelSummaryClasses.content,
      }}
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={panelSummaryClasses.heading}>
        {yyyymmWithSlash(props.yyyymm)}
      </Typography>
      <Typography className={panelSummaryClasses.secondaryHeading}>
        ¥{budgetAmount(props.budgets, props.yyyymm)}
      </Typography>
    </ExpansionPanelSummary>
  );
};

const memorized = React.memo(AccordionButton);

export default memorized;
