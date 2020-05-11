import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import H6Title from "@/components/atoms/H6Title";
import BudgetEditItem, {
  BudgetEditItemProps,
  BudgetEditItemInfo,
} from "@/components/molecules/BudgetEditItem";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import { Category } from "@/state/categories";
import { Budget } from "@/state/budgets";
import useStyles, {
  usePanelClasses,
  usePanelSummaryClasses,
  usePanelDetailsClasses,
} from "./style";

export interface BudgetEditListProps {
  // Reduxを整形して渡す
  budgets: {
    // YYYYMM :
    [key: string]: {
      // categoryId :
      [key: string]: {
        categoryName: string;
        budget: number;
      };
    };
  };
  handleChangeCategoryName: (...props: any[]) => any;
  handleChangeBudget: (...props: any[]) => any;
  handleClickAddBudgetButton: (...props: any[]) => any;
}

const BudgetEditList: React.FC<BudgetEditListProps> = (props) => {
  const classes = useStyles();
  const panelClasses = usePanelClasses();
  const panelDetailsClasses = usePanelDetailsClasses();
  const panelSummaryClasses = usePanelSummaryClasses();

  const [expanded, setExpanded] = useState<string | false>("");

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    console.log(panel);
    setExpanded(newExpanded ? panel : false);
  };
  const budgetEditItemProps = (
    item: BudgetEditItemInfo
  ): BudgetEditItemProps => {
    return {
      categoryName: item.categoryName,
      budget: item.budget,
      handleChangeCategoryName: props.handleChangeCategoryName,
      handleChangeBudget: props.handleChangeBudget,
    };
  };
  const textButtonProps: TextButtonProps = {
    text: "ADD BUDGET",
    handleClick: props.handleClickAddBudgetButton,
  };

  return (
    <>
      <H6Title text="Budget"></H6Title>
      {Object.entries(props.budgets).map(([yyyymm, budget]) => {
        return (
          <ExpansionPanel
            className={panelClasses.root}
            key={yyyymm}
            square
            expanded={expanded === yyyymm}
            onChange={handleChange(yyyymm)}
          >
            <ExpansionPanelSummary
              className={panelSummaryClasses.root}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{yyyymm}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={panelDetailsClasses.root}>
              {Object.entries(budget).map(([categoryId, item]) => {
                return (
                  <BudgetEditItem
                    key={categoryId}
                    {...budgetEditItemProps(item)}
                  ></BudgetEditItem>
                );
              })}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
      <Container maxWidth="sm">
        <Box padding="20px 0">
          <TextButton {...textButtonProps}></TextButton>
        </Box>
      </Container>
    </>
  );
};

export default BudgetEditList;
