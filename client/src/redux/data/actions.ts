import { createAsyncAction } from "typesafe-actions";
import { Dispatch } from "redux";

import ky from "../../ky/ky";

export const dataGetAsync = createAsyncAction(
  "DATA_GET_REQUEST",
  "DATA_GET_SUCCESS",
  "DATA_GET_FAILURE"
)<void, any, void>();

const dataRequest = async (): Promise<any | null> => {
  try {
    const data = await ky("data").json();
    return data;
  }
  catch (error) {
    return null;
  }
};

export const dataGet = () => async (dispatch: Dispatch) => {
  dispatch(dataGetAsync.request());
  const data = await dataRequest();
  if (data) {
    dispatch(dataGetAsync.success(data));
  } else {
    dispatch(dataGetAsync.failure());
  }
};
