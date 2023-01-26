import { combineReducers } from "@reduxjs/toolkit";
import auth, { AuthState } from "./auth/authSlice";

export type ApplicationState = {
  auth: AuthState;
};

const rootReducer = combineReducers<ApplicationState>({
  auth,
});

export default rootReducer;
