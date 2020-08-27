import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gql } from "graphql-request";
import { AppThunk, RootState, store } from "./index";
import gqlClient from "../gqlClient";
import gqlErrorHandler from "../utils/gqlErrorHandler";

interface processItem {
  id: string;
  name: string;
  numberOfExecutions: number;
  averageLeadTime: string;
  averageActiveTime: string;
  employeesInvolvedProcess: number;
  numberOfScenarios: number;
  start: string;
  end: string;
  loading: string;
}

interface ProcessState {
  loading: boolean;
  errors?: string[];
  procesess?: Partial<processItem>[];
}

const initialState: ProcessState = {
  loading: false,
};

export const processSlice = createSlice({
  name: "processList",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProcessList: (state, action: PayloadAction<Partial<processItem>[]>) => {
      state.procesess = action.payload;
    },
    setErrors: (state, action: PayloadAction<ProcessState["errors"]>) => {
      state.errors = action.payload;
    },
  },
});

export const { setProcessList } = processSlice.actions;

export const getProcessAsync = (): AppThunk => async (dispatch) => {
  dispatch(processSlice.actions.setLoading(true));

  interface Response {
    processList: Array<Partial<processItem>>;
  }

  const query = gql`
    query {
      processList {
        id
        name
        numberOfExecutions
        averageLeadTime
        averageActiveTime
        employeesInvolvedProcess
        numberOfScenarios
        start
        end
        loading
      }
    }
  `;

  try {
    const token = store.getState().loggedUser.token;
    gqlClient.setHeader("authorization", `Bearer ${token}`);
    const response = await gqlClient.request<Response>(query);

    dispatch(processSlice.actions.setProcessList(response.processList));
  } catch (error) {
    dispatch(processSlice.actions.setErrors(gqlErrorHandler(error)));
  }

  dispatch(processSlice.actions.setLoading(false));
};

export const selectProcess = (state: RootState) => state.proces;

export default processSlice.reducer;
