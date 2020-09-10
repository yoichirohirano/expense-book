import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container, Typography } from "@material-ui/core";
import H6Title from "@/components/atoms/H6Title";
import ChartHeader from "@/components/atoms/ChartHeader";
import TextButton, { TextButtonProps } from "@/components/atoms/TextButton";
import BudgetEditItem, {
  BudgetEditItemProps,
} from "@/components/molecules/BudgetEditItem";
import firebaseAuth from "@/plugins/firebase/auth";

import { RootState } from "@/state/store";
import { Login } from "state/login";
import {
  categoriesActions,
  Category,
  Categories,
  categoriesSelectors,
} from "@/state/categories";

const CategoryView: React.FC = () => {
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const { uid, loggedIn } = useSelector<RootState, Login>(
    (state) => state.login
  );
  const dispatch = useDispatch();

  const add = (): void => {
    const newCategory: Category = {
      name: "",
      defaultAmount: 0,
      sortIndex: categoriesSelectors.getIndexToAdd(categories),
    };
    dispatch(categoriesActions.create(uid, newCategory));
  };

  const remove = (id: string): void => {
    dispatch(categoriesActions.delete(uid, id));
  };

  const editName = (id: string, name: string): void => {
    dispatch(
      categoriesActions.update({
        uid,
        categoryId: id,
        category: Object.assign({}, categories[id], {
          name,
        }),
      })
    );
  };

  const editBudget = (id: string, defaultAmount: number): void => {
    dispatch(
      categoriesActions.update({
        uid,
        categoryId: id,
        category: Object.assign({}, categories[id], {
          defaultAmount,
        }),
      })
    );
  };

  const budgetEditItemProps = (
    categoryId: string,
    category: Category
  ): BudgetEditItemProps => {
    return {
      categoryName: category.name,
      budget: category.defaultAmount,
      handleChangeCategoryName: (value): void => {
        editName(categoryId, value);
      },
      handleChangeBudget: (value: string): void => {
        // inputをnumberに置換
        editBudget(categoryId, parseInt(value, 10));
      },
      handleClickDeleteButton: (): void => {
        remove(categoryId);
      },
    };
  };

  const addButtonProps: TextButtonProps = {
    text: "ADD CATEGORY",
    handleClick: add,
  };

  const loginButtonProps: TextButtonProps = {
    text: "ログインする",
    handleClick: () => {
      firebaseAuth.login();
    },
  };

  if (loggedIn) {
    return (
      <Container maxWidth="sm">
        <Box paddingTop="20px">
          <H6Title text="デフォルトカテゴリ設定"></H6Title>
        </Box>
        <ChartHeader
          expenseAmount={categoriesSelectors.getTotalAmount(categories)}
        ></ChartHeader>
        {Object.entries(categories)
          .sort((a, b) => {
            return a[1].sortIndex > b[1].sortIndex ? 1 : -1;
          })
          .map(([key, item]) => {
            return (
              <BudgetEditItem
                key={key}
                {...budgetEditItemProps(key, item)}
              ></BudgetEditItem>
            );
          })}
        <Box padding="20px 0">
          <TextButton {...addButtonProps}></TextButton>
        </Box>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="sm">
        <Box padding="20px 0">
          <Typography variant="body1" align="center">
            ログインすることで
          </Typography>
          <Typography variant="body1" align="center">
            カテゴリを自由に設定することができます。
          </Typography>
        </Box>
        <TextButton {...loginButtonProps}></TextButton>
      </Container>
    );
  }
};

export default CategoryView;
