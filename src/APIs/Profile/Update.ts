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
  first_name?: string;
  middle_name?: string;
  last_name?: string;
  profile_pic_url?: string;
  phone_number?: string;
  alternate_phone_number?: string;
  email?: string;
  gender?: "Male" | "Female" | "male" | "female";
  birth_year?: string;
  birth_month?: string;
  birth_date?: string;
  death_year?: string;
  death_month?: string;
  death_date?: string;
  party?: string;
  home_state_code?: string;
  education?: string;
  hometown?: string;
}

const updateData = async (data: UpdateProfile) => {
  try {
    const update = await axios.put(`${BASE_URL}/me`, data);
    return update;
  } catch (error) {
    console.log("Not able to patch the information!");
  }
};

export default updateData;
