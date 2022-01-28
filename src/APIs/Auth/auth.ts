import axios from "axios";
import { BASE_URL } from "../../Constants/constants";
import { LS_LOGIN_TOKEN } from "../../Constants/constants";
import { AuthUser } from "../../Models/AuthUser";
import { axiosRequest, axiosResponse } from "../base";
import qs from "qs";

axiosRequest();
axiosResponse();

export interface LoginCredentialsRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface Data {
  is_2fa_enabled: boolean;
}

export interface SignUpCredential {
  username: string;
  email: string;
  password: string;
  roles?: { roleName: string; username: string };
}

export interface RoleRequest {
  roleName: string;
  username: string;
}

const login = async (data: LoginCredentialsRequest) => {
  let url = `${BASE_URL}/auth/login`;
  const response = await axios.post<LoginResponse>(url, qs.stringify(data), {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  });
  console.log(response);
  localStorage.setItem(LS_LOGIN_TOKEN, response.data.access_token);
  return response;
};

const signup = async (data: SignUpCredential) => {
  let url = `${BASE_URL}/auth/signup`;
  const response = await axios.post(url, data);
  console.log(response);
  return response;
};

const role = async (data: RoleRequest) => {
  let url = `${BASE_URL}/role/addToUser`;
  const response = await axios.post(url, data);
  console.log(response);
  return response;
};

const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
  window.location.href = "/login";
};

export interface MeRequest {
  first_name: string;
  last_name: string;
  birth_date: string;
  birth_month: string;
  birth_year: string;
  area: string;
  city: string;
  district: string;
  pin_code: string;
  mobile_number: string;
  gender: string;
}

export interface MeResponse {
  data: AuthUser;
}

const checkUserDetails = async () => {
  const response = await axios.get(`${BASE_URL}/register/check`);
  return response;
};

const me = async () => {
  const response = await axios.get<MeResponse>(`${BASE_URL}/me`);
  return response;
};

const meSendData = async (data: MeRequest) => {
  const response = await axios.post<MeResponse>(`${BASE_URL}/me`, data);
  return response;
};

const meDpUpload = async (data: string) => {
  const formData = new FormData();
  formData.append("dp", data);
  const response = axios({
    method: "post",
    url: `${BASE_URL}/file/dp`,
    data: formData,
  });
  return response;
};

export {
  login,
  logout,
  me,
  signup,
  role,
  meSendData,
  checkUserDetails,
  meDpUpload,
};
