import { ActionType, getType } from "typesafe-actions";
import { Reducer } from "redux";

import { pending, rejected, StateCommon } from "../utils/common";

import * as actions from "./actions";

export interface DataState extends StateCommon {
  rates: any[];
}

export const initialData: DataState = {
  rates: [],
  pending: false,
  error: false
};

export const reducerData: Reducer<DataState, DataActions> = (
  state = initialData,
  action
) => {
  switch (action.type) {
    case getType(actions.dataGetAsync.request):
      return pending(state);
    case getType(actions.dataGetAsync.failure):
      return rejected(state);
    case getType(actions.dataGetAsync.success):
      return {
        ...state,
        rates: action.payload,
        pending: false
      };
    default:
      return state;
  }
};

export type DataActions = ActionType<typeof actions>;
