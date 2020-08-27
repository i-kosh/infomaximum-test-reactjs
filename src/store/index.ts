import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import userReducer from "./userSlice";
import processReducer from "./processSlice";

export const store = configureStore({
  reducer: {
    loggedUser: userReducer,
    proces: processReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
