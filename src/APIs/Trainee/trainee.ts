import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
import { AuthUser } from "../../Models/AuthUser";
import { axiosRequest, axiosResponse } from "../base";

axiosRequest();
axiosResponse();

export interface BulkTraineeResponse {
  data: { id: number; email: string; username: string; password: string }[];
}

export interface BulkTraineeRequest {
  data: { email: string; username: string; password: string }[];
}

const addBulkTrainee = async (data: BulkTraineeRequest) => {
  const response = axios.post<BulkTraineeResponse>(
    `${BASE_URL}/trainee/addBulk`,
    data.data
  );
  return response;
};

const fetchTrainees = async () => {
  const response = axios.get<AuthUser[]>(`${BASE_URL}/trainee/all`);
  return response;
};

export { addBulkTrainee, fetchTrainees };
