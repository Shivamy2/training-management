import axios, { AxiosRequestConfig } from "axios";
import { CANCEL } from "redux-saga";
import { LS_LOGIN_TOKEN } from "../Constants/constants";

export const axiosRequest = () => {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_LOGIN_TOKEN);

    if (!token) {
      return config;
    }

    return {
      ...config,
      headers: { ...config.headers, Authorization: `Bearer ${token}` },
    };
  });
};

export const axiosResponse = () => {
  axios.interceptors.response.use(undefined, (error) => {
    // if (error.response?.data?.code === 9101) {
    //   localStorage.removeItem(LS_LOGIN_TOKEN);
    //   window.location.href = "/login";
    // }
    // else if (
    //   error.response?.data?.code === 401 ||
    //   error.response?.data?.code === 410 ||
    //   error.response?.data?.code === 201
    // ) {
    //   window.location.href = "/not-found";
    // }
    return Promise.reject(error);
  });
};

export const get = <T>(url: string, config?: AxiosRequestConfig) => {
  const source = axios.CancelToken.source();
  const response = axios.get<T>(url, { ...config, cancelToken: source.token });
  response[CANCEL] = source.cancel;

  return response;
};
