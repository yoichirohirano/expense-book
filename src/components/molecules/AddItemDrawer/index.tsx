import React, { useState, useEffect } from "react";
import moment from "moment";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextInput from "@/components/atoms/TextInput";
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
  toggleDrawer: (props: boolean) => void;
  add: (props: Expense) => void;
  delete?: (...props: any[]) => any;
}

const AddItemDrawer: React.FC<AddItemDrawerProps> = (props) => {
  const getInitialCategory = (
    editingItem: Expense | undefined
  ): Category | null => {
    if (editingItem) {
      return categoriesSelectors.getSelectedCategory(
        props.categories,
        editingItem.category.ref
      );
    } else {
      return null;
    }
  };
  const classes = useStyles();

  const [name, setName] = useState<string>(props.editingItem?.name || "");
  const [amount, setAmount] = useState<number>(props.editingItem?.amount || 0);
  const [dateStr, setDate] = useState(
    props.editingItem?.dateStr || moment(new Date()).format("YYYYMMDDTHHmmSS")
  );
  const [category, setCategory] = useState<Category>(
    getInitialCategory(props.editingItem) ||
      Object.entries(props.categories)[0][1]
  );

  const [itemNameError, setItemNameError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);

  // 編集時、デフォルトをpropsから設定
  useEffect(() => {
    if (props.editingItem) {
      setName(props.editingItem.name);
      setAmount(props.editingItem.amount);
      setDate(props.editingItem.dateStr);
      const category = categoriesSelectors.getSelectedCategory(
        props.categories,
        props.editingItem.category.ref
      );
      if (category) setCategory(category);
    } else {
      setName("");
      setAmount(0);
      setDate(moment(new Date()).format("YYYYMMDDTHHmmSS"));
      setCategory(Object.entries(props.categories)[0][1]);
    }
  }, [props.editingItem]);

  const validate = (): boolean => {
    setItemNameError(!name);
    setPriceError(!amount || amount < 0);
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
    }
  };

  const handleClickDeleteButton = (): void => {
    props.delete && props.delete();
    props.toggleDrawer(false);
  };

  const nameInputProps = {
    label: "アイテム名",
    handleChange: setName,
    error: itemNameError,
    helperText: itemNameError ? "入力してください。" : "",
    className: "ItemNameInput",
    defaultValue: name,
  };

  const amountInputProps = {
    label: "金額",
    type: "number",
    handleChange: (value: string): void => {
      setAmount(parseInt(value, 10));
    },
    helperText: priceError ? "入力してください。" : "",
    error: priceError,
    className: "PriceInput",
    defaultValue: amount.toString(),
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
      onClose={() => {
        props.toggleDrawer(false);
      }}
      onOpen={() => {
        props.toggleDrawer(true);
      }}
    >
      <Box className={classes.closeButtonWrapper}>
        <CloseButton
          handleClick={() => {
            props.toggleDrawer(false);
          }}
        ></CloseButton>
      </Box>
      <Container maxWidth="sm">
        <H6Title text={props.title}></H6Title>
        <Box className={classes.categorySelectorWrapper}>
          <CategorySelector {...categorySelectorProps}></CategorySelector>
        </Box>
        <Box className={classes.inputArea}>
          <TextInput {...nameInputProps}></TextInput>
          <TextInput {...amountInputProps}></TextInput>
          <DateInput
            handleChange={(date: Date): void => {
              setDate(moment(date).format("YYYYMMDDTHHmmSS"));
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
