import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import { AppThunk, RootState, store } from "./index";
import gqlClient from "../gqlClient";
import { LocalStorageKeys } from "../localStorage";
import gqlErrorHandler from "../utils/gqlErrorHandler";

interface UserState {
  isLogged?: boolean;
  errors?: string[];
  loading: boolean;
  token: string | null;
  profile?: {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
  };
}

const token = localStorage.getItem(LocalStorageKeys.JWT_TOKEN);
const initialState: UserState = {
  loading: false,
  token: token,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (
      state,
      action: PayloadAction<Pick<UserState, "profile">>
    ) => {
      state.profile = action.payload.profile;
    },
    toggleLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setErrors: (state, action: PayloadAction<UserState["errors"]>) => {
      state.errors = action.payload;
    },
    resetErrors: (state) => {
      state.errors = undefined;
    },
    setToken: (state, action: PayloadAction<UserState["token"]>) => {
      state.isLogged = true;
      state.token = action.payload;

      if (action.payload) {
        localStorage.setItem(LocalStorageKeys.JWT_TOKEN, action.payload);
      } else {
        localStorage.removeItem(LocalStorageKeys.JWT_TOKEN);
      }
    },
    logOut: (state) => {
      state.isLogged = false;
      state.token = null;
      localStorage.removeItem(LocalStorageKeys.JWT_TOKEN);
    },
  },
});

export const {
  setUserProfile,
  resetErrors,
  toggleIsLogged,
  logOut,
} = userSlice.actions;

export const loginAsync = (authData: {
  email?: string;
  password?: string;
}): AppThunk => async (dispatch) => {
  dispatch(userSlice.actions.toggleLoading(true));
  dispatch(userSlice.actions.setErrors(undefined));

  interface LoginResponse {
    login: {
      token: string;
      user: {
        id: number;
        firstName: string;
        secondName: string;
        email: string;
      };
    };
  }

  const query = gql`
    mutation {
      login(email: "${authData.email}", password: "${authData.password}") {
        token
        user {
          id
          firstName
          secondName
          email
        }
      }
    }
  `;

  try {
    const response = await gqlClient.request<LoginResponse>(query);

    dispatch(
      userSlice.actions.setUserProfile({
        profile: {
          email: response.login.user.email,
          id: response.login.user.id,
          firstName: response.login.user.firstName,
          secondName: response.login.user.secondName,
        },
      })
    );
    dispatch(userSlice.actions.setToken(response.login.token));
  } catch (error) {
    dispatch(userSlice.actions.setErrors(gqlErrorHandler(error)));
  }

  dispatch(userSlice.actions.toggleLoading(false));
};

export const setCurrentUserProfileAsync = (): AppThunk => async (dispatch) => {
  dispatch(userSlice.actions.toggleLoading(true));

  interface LoginResponse {
    currentUser: {
      id: number;
      firstName: string;
      secondName: string;
      email: string;
    };
  }

  const query = gql`
    query {
      currentUser {
        id
        firstName
        secondName
        email
      }
    }
  `;

  try {
    const token = store.getState().loggedUser.token;
    gqlClient.setHeader("authorization", `Bearer ${token}`);
    const response = await gqlClient.request<LoginResponse>(query);

    dispatch(
      userSlice.actions.setUserProfile({
        profile: {
          email: response.currentUser.email,
          id: response.currentUser.id,
          firstName: response.currentUser.firstName,
          secondName: response.currentUser.secondName,
        },
      })
    );
    dispatch(userSlice.actions.toggleIsLogged(true));
  } catch (error) {
    dispatch(userSlice.actions.toggleIsLogged(false));
    dispatch(userSlice.actions.setToken(null));
  }

  dispatch(userSlice.actions.toggleLoading(false));
};

export const selectUser = (state: RootState) => state.loggedUser;

export default userSlice.reducer;
