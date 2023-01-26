import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  value: number;
}

const initialState: AuthState = {
  value: 0,
};

const { actions, reducer } = createSlice({
  name: "presence",
  initialState,
  reducers: {},
});

export const {} = actions;

export default reducer;
