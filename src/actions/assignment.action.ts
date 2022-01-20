import { AssignmentUpload } from "../APIs/Assignment/assignment";
import {
  ASSIGNMENT_FETCH,
  ASSIGNMENT_FETCH_ERROR,
  ASSIGNMENT_FETCH_LOADING,
  ASSIGNMENT_UPLOAD,
  ASSIGNMENT_UPLOAD_ERROR,
  ASSIGNMENT_UPLOAD_LOADING,
} from "./action.constants";

const assignmentUpload = (data: AssignmentUpload) => ({
  type: ASSIGNMENT_UPLOAD,
  payload: data,
});

const assignmentUploadLoading = (status: boolean) => ({
  type: ASSIGNMENT_UPLOAD_LOADING,
  payload: status,
});

const assignmentUploadError = (message: string) => ({
  type: ASSIGNMENT_UPLOAD_ERROR,
  payload: message,
});
const assignmentFetch = (data: any) => ({
  type: ASSIGNMENT_FETCH,
  payload: data,
});
const assignmentFetchLoading = (status: boolean) => ({
  type: ASSIGNMENT_FETCH_LOADING,
  payload: status,
});
const assignmentFetchError = (message: string) => ({
  type: ASSIGNMENT_FETCH_ERROR,
  payload: message,
});

export {
  assignmentUpload,
  assignmentUploadLoading,
  assignmentUploadError,
  assignmentFetch,
  assignmentFetchLoading,
  assignmentFetchError,
};
