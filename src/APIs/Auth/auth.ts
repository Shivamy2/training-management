import axios from "axios";
import { BASE_URL, loginToken } from "../../Constants/constants";
import { LS_LOGIN_TOKEN } from "../../Constants/constants";
import { User } from "../../Models/User";

axios.interceptors.request.use((config) => {
  if (!loginToken) return config;

  return {
    ...config,
    headers: { ...config.headers, Authorization: loginToken },
  };
});

interface LoginCredentialsRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
  data: Data;
}

export interface Data {
  is_2fa_enabled: boolean;
}

const login = async (data: LoginCredentialsRequest) => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/login`, data);
    console.log(response);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response;
  } catch (error) {
    console.error("Not able to send credentials", error);
  }
};

const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
  window.location.href = "/login";
};

interface MeResponse {
  data: User;
}

const me = () => {
  return axios
    .get<MeResponse>(`${BASE_URL}/me`)
    .then((response) => response.data.data);
};

export { login, logout, me };
