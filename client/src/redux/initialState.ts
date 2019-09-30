import { initialData, DataState } from "./data/reducers";

// Initial state for store
export const initialState = {
  data: initialData
};

export interface AppState {
  data: Readonly<DataState>;
}
