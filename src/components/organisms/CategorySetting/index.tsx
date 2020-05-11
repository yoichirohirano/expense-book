import React from "react";
import Box from "@material-ui/core/Box";
import CategoryEditList, {
  CategoryEditListProps,
} from "@/components/molecules/CategoryEditList";
import { RootState } from "@/state/store";
import { actions, Category } from "@/state/categories";
import { Categories } from "@/state/categories/reducers";
import { useSelector, useDispatch } from "react-redux";

const CategorySetting: React.FC = () => {
  const categories = useSelector<RootState, Categories>(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  const categoryEditListProps: CategoryEditListProps = {
    categories,
    handleChangeCategoryName: (id: string, newCategoryName: string): void => {
      dispatch(
        actions.updateCategory(
          Object.assign({}, categories[id], {
            name: newCategoryName,
          }),
          id
        )
      );
      console.log(categories);
    },
    handleChangeBudget: (id: string, newBudget: number) => {
      const newCategory: Category = Object.assign({}, categories[id], {
        defaultBudget: newBudget,
      });
      dispatch(actions.updateCategory(newCategory, id));
      console.log(categories);
    },
    handleClickAddCategoryButton: () => {
      const newCategory: Category = {
        name: "",
        defaultBudget: 0,
        color: "#ffff00",
      };
      dispatch(actions.createCategory(newCategory));
      console.log(categories);
    },
    handleClickDeleteButton: (id: string) => {
      console.log(id);
      dispatch(actions.deleteCategory(id));
    },
  };

  return <CategoryEditList {...categoryEditListProps}></CategoryEditList>;
};

export default CategorySetting;
