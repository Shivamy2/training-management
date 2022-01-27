import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
import { AuthUser } from "../../Models/AuthUser";

export interface AssignmentUpload {
  title: string;
  description: string;
  file: string;
  total_credits: string;
  due_date: Date;
}

export interface AssignmentResponse {
  id: number;
  trainerId: number;
  title: string;
  description: string;
  totalCredit: number;
  dueDate: string;
  available: boolean;
  name?: string;
  url?: string;
  type?: string;
  size?: number;
  isActive?: boolean;
}

export interface AssignmentSubmitRequest {
  link?: string;
  assignment_id: number;
  description: string;
  file?: string;
}

export interface AssignmentSubmitResponse {
  id: number;
  assignmentId: number;
  link: null;
  scoredCredit: number;
  description: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

export interface AssignmentDetailSubmitDetailResponse {
  id: number;
  trainerId: number;
  title: string;
  description: string;
  solution: string;
  totalCredit: number;
  scoreCredit: number;
  dueDate: string;
  available: boolean;
  name: string;
  url: string;
  type: string;
  size: number;
  link: string;
}

export interface AssignmentSubmittedTrainerModal {
  assignment: AssignmentResponse;
  assignmentFile?: ResponseFile;
  assignmentSubmittedDetails: AssignmentSubmittedDetails[];
}

export interface AssignmentSubmittedDetails {
  assignmentSubmitted: AssignmentSubmitResponse;
  trainee: AuthUser;
  solutionFile?: ResponseFile;
}

export interface ResponseFile {
  name: string;
  size: number;
  type: string;
  url: string;
}

const uploadAssignment = async (values: AssignmentUpload) => {
  const datas = new FormData();
  datas.append("file", values.file);
  datas.append("title", values.title);
  datas.append("description", values.description);
  datas.append("total_credit", values.total_credits);
  datas.append("due_date", JSON.stringify(values.due_date));
  const response = await axios({
    method: "post",
    url: `${BASE_URL}/assignment/upload`,
    data: datas,
  });
  return response;
};

const fetchAssignment = async () => {
  const response = await axios.get<AssignmentResponse[]>(
    `${BASE_URL}/assignment/all`
  );
  return response;
};

const fetchAvailableAssignments = async () => {
  const response = await axios.get<AssignmentResponse[]>(
    `${BASE_URL}/assignment/trainee/all`
  );
  return response;
};

const submitAssignment = async (data: AssignmentSubmitRequest) => {
  const formData = new FormData();
  formData.append("description", data.description.trim());
  formData.append("assignment_id", data.assignment_id.toString());
  data.link?.length && formData.append("link", data.link.trim());
  data.file && formData.append("file", data.file);
  const response = await axios({
    method: "POST",
    url: `${BASE_URL}/assignment/trainee/submit`,
    data: formData,
  });
  return response;
};

export {
  uploadAssignment,
  fetchAssignment,
  fetchAvailableAssignments,
  submitAssignment,
};
