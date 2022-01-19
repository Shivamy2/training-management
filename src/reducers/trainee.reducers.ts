import { Reducer } from "redux";
import {
  BULK_TRAINEE_ERROR_MESSAGE,
  BULK_TRAINEE_LOADING,
  BULK_TRAINEE_SEND,
  TRAINEE_FETCH,
  TRAINEE_FETCH_DATA,
} from "../actions/action.constants";
import { BulkTraineeResponse } from "../APIs/Trainee/trainee";

export interface TraineeState {
  traineeIds: number[];
  loading: boolean;
  error: string;
}

const initialState: TraineeState = {
  traineeIds: [],
  loading: false,
  error: "",
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
      return { ...state, loading: action.payload };
    }

    case BULK_TRAINEE_ERROR_MESSAGE: {
      return { ...state, error: action.payload };
    }

    case TRAINEE_FETCH: {
      return { ...state, loading: true };
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
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
