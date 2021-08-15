import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
import { User, Users } from "../../Models/Users";
import { axiosRequest, axiosResponse } from "../base";

axiosRequest();
axiosResponse();

export interface SelectedUserResponse {
  data: User;
}

export const fetchUsers = () => {
  return axios
    .get<Users>(`${BASE_URL}/people`)
    .then((response) => response.data.data);
};
export const fetchSeletedUsers = (id: number) => {
  return axios
    .get<SelectedUserResponse>(`${BASE_URL}/people/${id}`)
    .then((response) => response.data.data);
};
