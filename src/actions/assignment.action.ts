import {
  AssignmentResponse,
  AssignmentSubmitRequest,
  AssignmentSubmitResponse,
  AssignmentUpload,
} from "../APIs/Assignment/assignment";
import {
  ASSIGNMENT_FETCH,
  ASSIGNMENT_FETCH_AVAILABLE,
  ASSIGNMENT_FETCH_ERROR,
  ASSIGNMENT_FETCH_LOADING_LIST,
  ASSIGNMENT_FETCH_SAVE,
  ASSIGNMENT_SAVE,
  ASSIGNMENT_SUBMIT,
  ASSIGNMENT_SUBMIT_ERROR,
  ASSIGNMENT_SUBMIT_LOADING,
  ASSIGNMENT_SUBMIT_DATA,
  ASSIGNMENT_UPLOAD,
  ASSIGNMENT_UPLOAD_ERROR,
  ASSIGNMENT_UPLOAD_LOADING_ONE,
  ASSIGNMENT_SUBMIT_FETCH_LOADING,
  ASSIGNMENT_SUBMIT_FETCH_ERROR,
} from "./action.constants";

const assignmentUpload = (data: AssignmentUpload) => ({
  type: ASSIGNMENT_UPLOAD,
  payload: data,
});

const assignmentUploadLoading = (status: boolean) => ({
  type: ASSIGNMENT_UPLOAD_LOADING_ONE,
  payload: status,
});

const assignmentUploadError = (message: string) => ({
  type: ASSIGNMENT_UPLOAD_ERROR,
  payload: message,
});
const assignmentSave = (data: AssignmentResponse) => ({
  type: ASSIGNMENT_SAVE,
  payload: data,
});
const assignmentFetch = () => ({
  type: ASSIGNMENT_FETCH,
});
const assignmentAvailableFetch = () => ({
  type: ASSIGNMENT_FETCH_AVAILABLE,
});
const assignmentFetchSave = (data: AssignmentResponse[]) => ({
  type: ASSIGNMENT_FETCH_SAVE,
  payload: data,
});
const assignmentFetchLoading = (status: boolean) => ({
  type: ASSIGNMENT_FETCH_LOADING_LIST,
  payload: status,
});
const assignmentFetchError = (message: string) => ({
  type: ASSIGNMENT_FETCH_ERROR,
  payload: message,
});
const assignmentSubmit = (data: AssignmentSubmitRequest) => ({
  type: ASSIGNMENT_SUBMIT,
  payload: data,
});
const assignmentSubmitLoading = (status: boolean) => ({
  type: ASSIGNMENT_SUBMIT_LOADING,
  payload: status,
});
const assignmentSubmitError = (message: string) => ({
  type: ASSIGNMENT_SUBMIT_ERROR,
  payload: message,
});
const assignmentSubmitStoreData = (data: AssignmentSubmitResponse[]) => ({
  type: ASSIGNMENT_SUBMIT_DATA,
  payload: data,
});
const assignmentSubmitFetchLoading = (status: boolean) => ({
  type: ASSIGNMENT_SUBMIT_FETCH_LOADING,
  payload: status,
});
const assignmentSubmitFetch = () => ({
  type: ASSIGNMENT_SUBMIT_FETCH_LOADING,
});
const assignmentSubmitFetchError = (message: string) => ({
  type: ASSIGNMENT_SUBMIT_FETCH_ERROR,
  payload: message,
});

export {
  assignmentUpload,
  assignmentUploadLoading,
  assignmentUploadError,
  assignmentFetch,
  assignmentFetchLoading,
  assignmentFetchError,
  assignmentSave,
  assignmentFetchSave,
  assignmentAvailableFetch,
  assignmentSubmit,
  assignmentSubmitError,
  assignmentSubmitLoading,
  assignmentSubmitStoreData,
  assignmentSubmitFetch,
  assignmentSubmitFetchLoading,
  assignmentSubmitFetchError,
};
