import React, { useState, useEffect } from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextInput, { TextInputProps } from "@/components/atoms/TextInput";
import AmountInput, { AmountInputProps } from "@/components/atoms/AmountInput";
import DateInput from "@/components/atoms/DateInput";
import H6Title from "@/components/atoms/H6Title";
import CloseButton from "@/components/atoms/CloseButton";
import CompleteButton from "@/components/atoms/CompleteButton";
import DeleteButton from "@/components/atoms/DeleteButton";
import { Categories, Category, categoriesSelectors } from "@/state/categories";
import { Expense } from "@/state/expenses";
import CategorySelector, {
  CategorySelectorProps,
} from "@/components/molecules/CategorySelector";
import useStyles from "./style";

export interface AddItemDrawerProps {
  categories: Categories;
  title: string;
  isOpen: boolean;
  editItemId?: string;
  editingItem?: Expense;
  toggleDrawer: (open: boolean) => void;
  add: (props: Expense) => void;
  delete?: () => void;
}

const AddItemDrawer: React.FC<AddItemDrawerProps> = (props) => {
  const classes = useStyles();

  const getInitialCategory = (editingItem: Expense | undefined): Category => {
    if (editingItem) {
      const editingItemCategory = categoriesSelectors.getSelectedCategory(
        props.categories,
        editingItem.category.ref
      );
      if (editingItemCategory) return editingItemCategory;
    }
    // 編集アイテムがない場合はデフォルトカテゴリの先頭要素を返す
    const defaultCategory = Object.entries(props.categories)[0][1];
    return defaultCategory;
  };

  const [name, setName] = useState<string>(props.editingItem?.name || "");
  const [amount, setAmount] = useState<number>(props.editingItem?.amount || 0);
  const [dateStr, setDateStr] = useState<string>(
    props.editingItem?.dateStr || ""
  );
  const [category, setCategory] = useState<Category>(
    getInitialCategory(props.editingItem)
  );
  const [itemNameError, setItemNameError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  /**
   * 入力欄の状態を初期化する
   */
  const reset = (): void => {
    setName("");
    setAmount(0);
    const now = new Date();
    // キャッシュしないでsetすると値がバグるので一度キャッシュする
    const tmp = moment(now).format("YYYYMMDDTHHmmss");
    setDateStr(tmp);
    setCategory(Object.entries(props.categories)[0][1]);
    setItemNameError(false);
    setPriceError(false);
  };

  // 編集時、デフォルトをpropsから設定
  useEffect(() => {
    if (props.editingItem) {
      setName(props.editingItem.name);
      setAmount(props.editingItem.amount);
      setDateStr(props.editingItem.dateStr);
      const category = categoriesSelectors.getSelectedCategory(
        props.categories,
        props.editingItem.category.ref
      );
      if (category) setCategory(category);
    } else {
      reset();
    }
  }, [props.editingItem]);

  const validate = (): boolean => {
    setItemNameError(!name);
    setPriceError(!amount || amount <= 0);
    return Boolean(name && amount && dateStr);
  };

  const handleClickCompleteButton = (): void => {
    if (validate()) {
      const newExpense: Expense = {
        category: {
          name: category.name,
          ref: categoriesSelectors.getIdFromName(
            props.categories,
            category.name
          ),
        },
        name,
        amount,
        date: moment(dateStr, moment.defaultFormat).toDate(),
        dateStr,
      };
      props.add(newExpense);
      props.toggleDrawer(false);
      reset();
    }
  };

  const handleClickDeleteButton = (): void => {
    props.delete && props.delete();
    props.toggleDrawer(false);
    reset();
  };

  const nameInputProps: TextInputProps = {
    label: "アイテム名",
    handleChange: setName,
    error: itemNameError,
    helperText: itemNameError ? "入力してください。" : "",
    className: "ItemNameInput",
    defaultValue: name,
    // UI考慮で最大20文字
    maxLength: 20,
  };

  const amountInputProps: AmountInputProps = {
    label: "金額",
    defaultValue: amount.toString(),
    handleChange: (value: string): void => {
      const newAmount = parseInt(value, 10) ? parseInt(value, 10) : 0;
      setAmount(newAmount);
    },
    helperText: priceError ? "入力してください。" : "",
    error: priceError,
    className: "PriceInput",
  };

  const categorySelectorProps: CategorySelectorProps = {
    categories: props.categories,
    handleChangeCategory: (categoryId: string): void => {
      const category = categoriesSelectors.getSelectedCategory(
        props.categories,
        categoryId
      );
      if (category) setCategory(category);
    },
    selectedCategoryId: categoriesSelectors.getIdFromName(
      props.categories,
      category.name
    ),
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={props.isOpen}
      onClose={(): void => {
        props.toggleDrawer(false);
      }}
      onOpen={(): void => {
        props.toggleDrawer(true);
      }}
    >
      <Box className={classes.closeButtonWrapper}>
        <CloseButton
          handleClick={(): void => {
            props.toggleDrawer(false);
          }}
        ></CloseButton>
      </Box>
      <Container maxWidth="sm">
        <Box paddingTop="20px">
          <H6Title text={props.title}></H6Title>
        </Box>
        <Box className={classes.categorySelectorWrapper}>
          <CategorySelector {...categorySelectorProps}></CategorySelector>
        </Box>
        <Box className={classes.inputArea}>
          <TextInput {...nameInputProps}></TextInput>
          <AmountInput {...amountInputProps}></AmountInput>
          <DateInput
            handleChange={(date: Date): void => {
              setDateStr(moment(date).format("YYYYMMDDTHHmmSS"));
            }}
            defaultTimestamp={moment(dateStr).valueOf()}
          ></DateInput>
        </Box>
      </Container>
      <Box className={classes.completeButtonWrapper}>
        <CompleteButton
          handleClick={handleClickCompleteButton}
        ></CompleteButton>
      </Box>
      {props.editItemId && (
        <Box className={classes.deleteButtonWrapper}>
          <DeleteButton handleClick={handleClickDeleteButton}></DeleteButton>
        </Box>
      )}
    </SwipeableDrawer>
  );
};

export default AddItemDrawer;
