import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container, ExpansionPanel } from "@material-ui/core";
import H6Title from "@/components/atoms/H6Title";
import AddBudgetButton, {
  AddBudgetButtonProps,
} from "@/components/molecules/AddBudgetButton";
import AccordionContent from "./AccordionContent";
import AccordionButton from "./AccordionButton";
import { usePanelClasses } from "./style";

import { RootState } from "@/state/store";
import { budgetsActions, CategoryBudgets, Budgets } from "@/state/budgets";
import { categoriesSelectors, Categories } from "@/state/categories";
import { Login } from "@/state/login";

const BudgetView: React.FC = () => {
  const panelClasses = usePanelClasses();

  const dispatch = useDispatch();
  const budgets = useSelector<RootState, Budgets>((state) => state.budgets);
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const { uid } = useSelector<RootState, Login>((state) => state.login);

  const [currentMonth, setCurrentMonth] = useState<string | false>("");

  const toggle = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ): void => {
    setCurrentMonth(isExpanded ? panel : false);
  };

  const addBudgetButtonProps: AddBudgetButtonProps = {
    addBudget: (yyyymm: string): void => {
      const currentYYYYMM = yyyymm;
      const newBudget: CategoryBudgets = categoriesSelectors.getDefaultBudget(
        uid || "",
        categories
      );
      dispatch(budgetsActions.createBudget(newBudget, currentYYYYMM));
      // Datepickerモーダルが消えるのを待ってからパネルを開く
      setTimeout(() => {
        setCurrentMonth(currentYYYYMM);
      }, 200);
    },
  };

  const close = useCallback(
    (yyyymm: string) => {
      dispatch(budgetsActions.deleteBudget(yyyymm));
      // 開いているパネルを閉じる
      setCurrentMonth(false);
    },
    [dispatch]
  );

  return (
    <>
      <Box padding="20px 0">
        <H6Title text="予算設定"></H6Title>
      </Box>
      {Object.entries(budgets).map(([yyyymm, value]) => {
        return (
          <ExpansionPanel
            className={panelClasses.root}
            key={yyyymm}
            square
            expanded={currentMonth === yyyymm}
            onChange={toggle(yyyymm)}
          >
            <AccordionButton yyyymm={yyyymm} budgets={budgets} />
            <AccordionContent
              yyyymm={yyyymm}
              budget={value.categoryBudgets}
              close={close}
            />
          </ExpansionPanel>
        );
      })}
      <Container maxWidth="sm">
        <AddBudgetButton {...addBudgetButtonProps}></AddBudgetButton>
      </Container>
    </>
  );
};

export default BudgetView;
