import axios from "axios";
import { BASE_URL } from "../../Constants/constants";

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
  scoredCredit: number;
  dueDate: string;
  available: boolean;
  name?: string;
  url?: string;
  type?: string;
  size?: number;
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
    url: `${BASE_URL}/api/assignment/upload`,
    data: datas,
  });
  return response;
};

export { uploadAssignment };
