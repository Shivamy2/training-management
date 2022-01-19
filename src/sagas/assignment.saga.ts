import { AnyAction } from "redux";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ASSIGNMENT_UPLOAD } from "../actions/action.constants";
import {
  assignmentUploadError,
  assignmentUploadLoading,
} from "../actions/assignment.action";
import { uploadAssignment } from "../APIs/Assignment/assignment";

export function* uploadAssignmentSaga(action: AnyAction): Generator<any> {
  yield put(assignmentUploadError(""));
  try {
    const response: any = yield call(uploadAssignment, action.payload);
    yield put(assignmentUploadError(response.data.message));
    // yield put(assignmentUploadLoading(false));
  } catch {
    yield put(
      assignmentUploadError("Error occured while uploading assignment")
    );
  } finally {
    yield put(assignmentUploadLoading(false));
  }
}

export function* watchAssignment() {
  yield all([takeEvery(ASSIGNMENT_UPLOAD, uploadAssignmentSaga)]);
}
