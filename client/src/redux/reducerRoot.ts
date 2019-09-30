import { combineReducers } from "redux";

import { reducerData } from "./data/reducers";

export const reducerRoot = combineReducers({
  data: reducerData
});
