import type { AxiosResponse, AxiosRequestConfig } from "axios";
import axios from "axios";

// Store
// import { store } from 'store';
// import { selectAuthToken } from 'store/reducers/auth/selectors';

import { BASE_URL } from "../constants/endpoints";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const request = <T = unknown>({
  method = "get",
  url = "",
  params = {},
  data = {},
  headers = {},
}: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  // const state = store.getState();
  // const authToken = selectAuthToken(state);
  return axiosInstance.request({
    method,
    url,
    params,
    data: {
      ...data,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
      // Authorization: authToken,
    },
  });
};
