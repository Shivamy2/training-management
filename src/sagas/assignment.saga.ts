import { AnyAction } from "redux";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  ASSIGNMENT_FETCH,
  ASSIGNMENT_FETCH_AVAILABLE,
  ASSIGNMENT_SUBMIT,
  ASSIGNMENT_UPLOAD,
} from "../actions/action.constants";
import {
  assignmentFetchError,
  assignmentFetchLoading,
  assignmentFetchSave,
  assignmentSave,
  assignmentSubmitError,
  assignmentSubmitLoading,
  assignmentUploadError,
  assignmentUploadLoading,
} from "../actions/assignment.action";
import {
  fetchAssignment,
  fetchAvailableAssignments,
  submitAssignment,
  uploadAssignment,
} from "../APIs/Assignment/assignment";

function* uploadAssignmentSaga(action: AnyAction): Generator<any> {
  yield put(assignmentUploadError(""));
  try {
    const response: any = yield call(uploadAssignment, action.payload);
    yield put(assignmentSave(response));
    // yield put(assignmentUploadError(response.data.message));
    // yield put(assignmentUploadLoading(false));
  } catch {
    yield put(
      assignmentUploadError("Error occured while uploading assignment")
    );
  } finally {
    yield put(assignmentUploadLoading(false));
  }
}

function* fetchAssignmentsSaga(): Generator<any> {
  yield put(assignmentFetchError(""));
  try {
    const response: any = yield call(fetchAssignment);
    yield put(assignmentFetchSave(response));
  } catch (error: any) {
    yield put(assignmentFetchLoading(false));
    yield put(assignmentUploadError(error.response.data.message));
  }
}

function* fetchAssignmentsAvailableSaga(): Generator<any> {
  yield put(assignmentFetchError(""));
  try {
    const response: any = yield call(fetchAvailableAssignments);
    yield put(assignmentFetchSave(response));
  } catch (error: any) {
    yield put(assignmentFetchLoading(false));
    yield put(assignmentUploadError(error.response.data.message));
  }
}

function* submitAssignmentSolutionSaga(action: AnyAction): Generator<any> {
  yield put(assignmentSubmitError(""));
  try {
    yield call(submitAssignment, action.payload);
    yield put(assignmentSubmitLoading(false));
    window.location.reload();
  } catch (error: any) {
    yield put(assignmentSubmitError(error.response.data.message));
    yield put(assignmentSubmitLoading(false));
  }
}

export function* watchAssignment() {
  yield all([
    takeEvery(ASSIGNMENT_UPLOAD, uploadAssignmentSaga),
    takeEvery(ASSIGNMENT_FETCH, fetchAssignmentsSaga),
    takeEvery(ASSIGNMENT_FETCH_AVAILABLE, fetchAssignmentsAvailableSaga),
    takeEvery(ASSIGNMENT_SUBMIT, submitAssignmentSolutionSaga),
  ]);
}
