import axios from "axios";
import {
  BASE_URL,
  loginToken,
  LS_LOGIN_TOKEN,
} from "../../Constants/constants";
import { GroupDataStream } from "../../Models/Groups";

axios.interceptors.request.use((config) => {
  if (!loginToken) return config;

  return {
    ...config,
    headers: { ...config.headers, Authorization: loginToken },
  };
});

axios.interceptors.response.use(undefined, (error) => {
  if ((error.response.data.code = 9101)) {
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
  return Promise.reject(error);
});

export interface GroupResponse {
  data: GroupDataStream[];
}

export interface GroupRequest {
  query: string;
  status: "all-groups";
  offset?: number;
  limit?: number;
}

export interface SelectedGroupResponse {
  data: GroupDataStream;
}

const fetchGroupData = async (data: GroupRequest) => {
  try {
    const response = await axios.get<GroupResponse>(`${BASE_URL}/groups`, {
      params: data,
    });
    return response;
  } catch (error) {
    console.log("Not able to fetch groups data");
  }
};

const fetchSelectedGroup = async (id: string) => {
  try {
    const response = await axios.get<SelectedGroupResponse>(
      `${BASE_URL}/groups/${id}`
    );
    return response;
  } catch (error) {
    console.log("Not able to send fetch selected group request");
  }
};

export { fetchGroupData, fetchSelectedGroup };
