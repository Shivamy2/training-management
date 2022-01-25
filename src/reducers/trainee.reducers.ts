import { Reducer } from "redux";
import {
  BULK_TRAINEE_ERROR_MESSAGE,
  BULK_TRAINEE_LOADING,
  BULK_TRAINEE_SEND,
  TRAINEE_FETCH,
  TRAINEE_FETCH_DATA,
  TRAINEE_LOAD_DATA_LOADING,
} from "../actions/action.constants";
import { BulkTraineeResponse } from "../APIs/Trainee/trainee";
import { EntityState } from "./entity.reducers";

export interface TraineeState extends EntityState {
  traineeIds: number[];
}

const initialState: TraineeState = {
  loadingOne: false,
  loadingList: false,
  traineeIds: [],
  errorMessage: "",
};

export const traineeReducer: Reducer<TraineeState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BULK_TRAINEE_SEND: {
      return { ...state, loading: true };
    }

    case BULK_TRAINEE_LOADING: {
      return { ...state, loadingOne: action.payload };
    }

    case BULK_TRAINEE_ERROR_MESSAGE: {
      return { ...state, errorMessage: action.payload };
    }

    case TRAINEE_FETCH: {
      return { ...state, loadingList: true };
    }

    case TRAINEE_LOAD_DATA_LOADING: {
      return { ...state, loadingList: action.payload };
    }

    case TRAINEE_FETCH_DATA: {
      const data = action.payload as BulkTraineeResponse;
      let traineeIds: number[] = [];
      data?.data?.forEach((trainee) => {
        traineeIds.push(trainee.id);
      });

      return {
        ...state,
        traineeIds: [...state.traineeIds, ...traineeIds],
        loadingList: false,
        loadingOne: false,
      };
    }

    default: {
      return state;
    }
  }
};
