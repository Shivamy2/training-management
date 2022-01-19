import { AnyAction } from "redux";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { BULK_TRAINEE_SEND, TRAINEE_FETCH } from "../actions/action.constants";
import {
  bulkTraineeErrorMessage,
  bulkTraineeLoading,
  traineeFetchData,
  traineeLoadDataErrorMessage,
  traineeLoadDataLoading,
} from "../actions/trainee.constants";
import { addBulkTrainee, fetchTrainees } from "../APIs/Trainee/trainee";

function* bulkTraineeData(action: AnyAction): Generator<any> {
  console.log("Bulk Trainee Data Sending Saga is running");
  yield put(bulkTraineeErrorMessage(""));
  try {
    const response: any = yield call(addBulkTrainee, action.payload);
    console.log("Trainees response ", response);

    yield put(traineeFetchData(response));
    console.log("Bulk data sent is", response);
  } catch (e: any) {
    yield put(bulkTraineeLoading(false));
    yield put(bulkTraineeErrorMessage(e.response.data.message));
  }
}

function* fetchTraineeData(): Generator<any> {
  yield put(traineeLoadDataErrorMessage(""));
  try {
    const response: any = yield call(fetchTrainees);
    yield put(traineeFetchData(response));
  } catch (error: any) {
    yield put(traineeLoadDataErrorMessage(error.response.data.message));
    yield put(traineeLoadDataLoading(false));
  }
}

export function* watchTrainee() {
  yield all([
    takeEvery(BULK_TRAINEE_SEND, bulkTraineeData),
    takeEvery(TRAINEE_FETCH, fetchTraineeData),
  ]);
}
