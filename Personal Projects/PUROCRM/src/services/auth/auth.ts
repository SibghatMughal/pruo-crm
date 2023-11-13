import {
  CHECK_USER_ENDPOINT,
  CREATE_USER_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
  FORGOT_PASSWORD_VERIFY_ENDPOINT,
  GET_USER_ENDPOINT,
  GOOGLE_AUTH_ENDPOINT,
  LINKEDIN_AUTH_ENDPOINT,
  LOGIN_USER_ENDPOINT,
  NEW_PASSWORD_ENDPOINT,
  VERIFY_EMAIL_ENDPOINT,
  VERIFY_EMAIL_TOKEN_ENDPOINT,
} from "@/constants/endpoints";
import { request } from "../api";

export const getUserInfo = async (token: any) => {
  return request({
    method: "get",
    url: GET_USER_ENDPOINT,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const loginUser = (data: any) => {
  return request({
    method: "post",
    url: LOGIN_USER_ENDPOINT,
    data,
  });
};

export const signupUser = (data: any) => {
  return request({
    method: "post",
    url: CREATE_USER_ENDPOINT,
    data,
  });
};

export const verifyEmailToken = (data: any) => {
  return request({
    method: "post",
    url: VERIFY_EMAIL_TOKEN_ENDPOINT,
    data,
  });
};

export const verifyEmail = (data: any) => {
  return request({
    method: "post",
    url: VERIFY_EMAIL_ENDPOINT,
    data,
  });
};

export const googleAuth = (userType: string) => {
  return request({
    method: "get",
    url: `${GOOGLE_AUTH_ENDPOINT}/${userType}`,
  });
};

export const linkedInAuth = (userType: string) => {
  return request({
    method: "get",
    url: `${LINKEDIN_AUTH_ENDPOINT}/${userType}`,
  });
};

export const forgotPassword = (data: any) => {
  return request({
    method: "post",
    url: `${FORGOT_PASSWORD_ENDPOINT}`,
    data,
  });
};

export const verifyForgotPassword = (data: any) => {
  return request({
    method: "post",
    url: `${FORGOT_PASSWORD_VERIFY_ENDPOINT}`,
    data,
  });
};

export const newPassword = (data: any) => {
  return request({
    method: "post",
    url: `${NEW_PASSWORD_ENDPOINT}`,
    data,
  });
};
export const checkUser = (data: any) => {
  return request({
    method: "post",
    url: CHECK_USER_ENDPOINT,
    data,
  });
};
