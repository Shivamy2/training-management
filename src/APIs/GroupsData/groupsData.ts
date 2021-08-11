import axios, { CancelToken } from "axios";
import { BASE_URL } from "../../Constants/constants";
import { GroupDataStream } from "../../Models/Groups";
import { axiosRequest, axiosResponse, get } from "../base";

axiosRequest();
axiosResponse();

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

const fetchGroupData = (data: GroupRequest, token?: CancelToken) => {
  try {
    return get<GroupResponse>(`${BASE_URL}/groups`, {
      params: data,
      cancelToken: token,
    });
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
