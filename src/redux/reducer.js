import * as types from "./types";

const reducers = {
  [types.COUNT_UP](old_state, action){

  },
};

const reducer = (old_state, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](old_state, action)
    : old_state;

export default reducer;

