import { Expenses } from ".";
import { ExpensesAction } from "./actions";
import actionTypes from "./types";

export const sampleState: Expenses = {
  cZbFW93EUJkfpwpovbXC: {
    amount: 15000,
    category: {
      name: "食費",
      id: "E3cnHvL8SwPTbn4ChMWq",
    },
    date: new Date("2020-01-04T00:00:00"),
    dateStr: "20200104T000000",
    name: "表参道",
  },
  UWSP5lnR4OWh1AjRh5mD: {
    amount: 15000,
    category: {
      name: "娯楽",
      id: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-02-14T00:00:00"),
    dateStr: "20200214T000000",
    name: "バレンタイン",
  },
  xWSP5lnR4OWh1AjRh5ms: {
    amount: 25000,
    category: {
      name: "娯楽",
      id: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-03-13T00:00:00"),
    dateStr: "20200313T000000",
    name: "誕生日",
  },
  xWSP5lnRyyyyh1AjRh5ms: {
    amount: 5000,
    category: {
      name: "娯楽",
      id: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-04-01T00:00:00"),
    dateStr: "20200313T000000",
    name: "お花見",
  },
  xWSP5lnRysssssRh5ms: {
    amount: 50000,
    category: {
      name: "娯楽",
      id: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-05-05T00:00:00"),
    dateStr: "20200505T000000",
    name: "海外旅行✈",
  },
  TSTHeB4tTwrf7DjCOmJc: {
    amount: 1000,
    category: {
      name: "食費",
      id: "E3cnHvL8SwPTbn4ChMWq",
    },
    date: new Date("2020-06-09T00:00:00"),
    dateStr: "20200609T000000",
    name: "スーパー",
  },
  K0Sivmdt67a26IMWOw20: {
    amount: 300,
    category: {
      name: "食費",
      id: "E3cnHvL8SwPTbn4ChMWq",
    },
    date: new Date("2020-06-25T12:34:56"),
    dateStr: "20200625T123456",
    name: "カフェ",
  },
  d0Sisssdt67a26IMWOw20: {
    amount: 4000,
    category: {
      name: "娯楽",
      id: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-06-25T12:34:57"),
    dateStr: "20200625T123457",
    name: "飲み会",
  },
  joGcRIZuw4lsPzwOG19q: {
    amount: 5000,
    category: {
      name: "交通費",
      id: "pXhYzqbyOrjGnSmZJMFN",
    },
    date: new Date("2020-06-01T18:00:00"),
    dateStr: "20200601T180000",
    name: "Suica",
  },
  jossIZuw4lsPzwOG19q: {
    amount: 5000,
    category: {
      name: "貯金",
      id: "WO0O1eUgpwzGj49EmzZW",
    },
    date: new Date("2020-06-01T00:00:00"),
    dateStr: "20200601T000000",
    name: "預金",
  },
  jsefsrIZuw4lsPzwOG19q: {
    amount: 2980,
    category: {
      name: "固定費",
      id: "XKZ5LP61ZgRGWeRFTboV",
    },
    date: new Date("2020-06-01T00:12:34"),
    dateStr: "20200601T001234",
    name: "スマホ",
  },
  erytrfsrIZuw4lsPzwOG19q: {
    amount: 620,
    category: {
      name: "食費",
      id: "E3cnHvL8SwPTbn4ChMWq",
    },
    date: new Date("2020-06-01T00:11:34"),
    dateStr: "20200601T001134",
    name: "コンビニ",
  },
  clrtrfsrIZuw4lsPzwO: {
    amount: 9800,
    category: {
      name: "娯楽",
      id: "fGUwZnNss1Nnmvtdteoi",
    },
    date: new Date("2020-06-14T00:11:34"),
    dateStr: "20200614T001134",
    name: "ファッション雑貨",
  },
  lkjhrtrfsrIZuw4lsPzwO: {
    amount: 40000,
    category: {
      name: "貯金",
      id: "WO0O1eUgpwzGj49EmzZW",
    },
    date: new Date("2020-06-30T00:11:34"),
    dateStr: "20200630T001134",
    name: "6月分の貯金",
  },
  ssjhrtrfsrIZuw4lsPzwO: {
    amount: 3500,
    category: {
      name: "書籍",
      id: "w2IJ86mtXfcNyRm23aw4",
    },
    date: new Date("2020-06-29T00:11:34"),
    dateStr: "20200629T001134",
    name: "技術書",
  },
  ttjhrtrfsrIZuw4lsPzwO: {
    amount: 8800,
    category: {
      name: "雑費",
      id: "雑費",
    },
    date: new Date("2020-06-28T00:11:34"),
    dateStr: "20200628T001134",
    name: "日用品",
  },
};

const initialState: Expenses = sampleState;

const reducer = (
  state: Expenses = initialState,
  action: ExpensesAction
): Expenses => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.CREATE_EXPENSE:
    case actionTypes.UPDATE_EXPENSE: {
      newState[action.payload.id] = action.payload.expense;
      return newState;
    }
    case actionTypes.DELETE_EXPENSE: {
      delete newState[action.payload.id];
      return newState;
    }
    case actionTypes.UPDATE_ALL_EXPENSES_FROM_FIRESTORE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
