import axios from "axios";
import { BASE_URL, loginToken } from "../../Constants/constants";

axios.interceptors.request.use((config) => {
  if (!loginToken) return config;
  return {
    ...config,
    headers: { ...config.headers, Authorization: loginToken },
  };
});

export interface UpdateProfile {
  email: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  education: string;
  birth_date: number;
  birth_month: string;
  birth_year: number;
}

const updateData = async (data: UpdateProfile) => {
  try {
    return axios.patch(`${BASE_URL}/me/update`);
  } catch (error) {}
};

export default updateData;
