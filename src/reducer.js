import * as action from "./action";

const initalstate = {
  data: " "
};

export default function reducer(state = initalstate, action) {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return Object.assign({}, state, { data: action.data, selectedOption: action.selectedOption });

    default:
      return state;
  }
}

export { initalstate };
