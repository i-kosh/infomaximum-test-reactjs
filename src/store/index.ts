import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    loggedUser: userReducer,
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
