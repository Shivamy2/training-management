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
  birth_date: string;
  birth_month: string;
  birth_year: string;
}

const updateData = async (data: UpdateProfile) => {
  try {
    const update = await axios.post(`${BASE_URL}/me/update`, data);
    return update;
  } catch (error) {
    console.log("Not able to patch the information!");
  }
};

export default updateData;
