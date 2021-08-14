import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
import { Users } from "../../Models/Users";
import { axiosRequest, axiosResponse } from "../base";

axiosRequest();
axiosResponse();

export const fetchUsers = () => {
  return axios
    .get<Users>(`${BASE_URL}/people`)
    .then((response) => response.data.data);
};
