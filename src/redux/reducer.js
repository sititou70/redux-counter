import * as types from "./types";
import clonedeep from "lodash.clonedeep";

const reducers = {
  [types.COUNT_UP](old_state, action){
    const state = clonedeep(old_state);
    state.count++;
    return state;
  },
};

const reducer = (old_state, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](old_state, action)
    : old_state;

export default reducer;

