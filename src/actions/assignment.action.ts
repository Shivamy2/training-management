import { AssignmentUpload } from "../APIs/Assignment/assignment";
import {
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

export { assignmentUpload, assignmentUploadLoading, assignmentUploadError };
