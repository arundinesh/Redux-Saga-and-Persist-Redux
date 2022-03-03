import produce from "immer";

let initialState = {
  count: 0,
  items: [],
  isLoading: false,
};

//without immerjs
// export default function foo(state = initialState, action) {
//   switch (action.type) {
//     case "ITEMS": {
//       return { ...state, items: action.data, count: action.page };
//     }
//     case "SET_LOADING": {
//       return { ...state, isLoading: action.data };
//     }
//     default: {
//       return state;
//     }
//   }
// }

//with immer js
//PRODUCE - it's converts the mutable state to immutable state and also it makes the mutable copy of the state
const foo = produce((draft = initialState, action) => {
  switch (action.type) {
    case "ITEMS": {
      draft.items = action.data;
      draft.count = action.page;
      return draft;
    }
    case "SET_LOADING": {
      draft.isLoading = action.data;
      return draft;
    }
    default: {
      return draft;
    }
  }
});

export default foo;
