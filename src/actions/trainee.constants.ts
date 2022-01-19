import {
  BulkTraineeRequest,
  BulkTraineeResponse,
} from "../APIs/Trainee/trainee";
import {
  BULK_TRAINEE_ERROR_MESSAGE,
  BULK_TRAINEE_LOADING,
  BULK_TRAINEE_SEND,
  TRAINEE_FETCH,
  TRAINEE_FETCH_DATA,
  TRAINEE_LOAD_DATA_ERROR,
  TRAINEE_LOAD_DATA_LOADING,
} from "./action.constants";

export const bulkTraineeSendData = (data: BulkTraineeRequest) => ({
  type: BULK_TRAINEE_SEND,
  payload: data,
});

export const bulkTraineeLoading = (status: boolean) => ({
  type: BULK_TRAINEE_LOADING,
  payload: status,
});

export const bulkTraineeErrorMessage = (message: string) => ({
  type: BULK_TRAINEE_ERROR_MESSAGE,
  payload: message,
});

export const traineeLoadData = () => ({
  type: TRAINEE_FETCH,
});
export const traineeLoadDataErrorMessage = (message: string) => ({
  type: TRAINEE_LOAD_DATA_ERROR,
  payload: message,
});
export const traineeLoadDataLoading = (status: boolean) => ({
  type: TRAINEE_LOAD_DATA_LOADING,
  payload: status,
});

export const traineeFetchData = (data: BulkTraineeResponse) => ({
  type: TRAINEE_FETCH_DATA,
  payload: data,
});
