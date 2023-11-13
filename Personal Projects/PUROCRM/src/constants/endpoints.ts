export const BASE_URL =
  process.env.NEXT_APP_API_URL || "http://localhost:4000/api";

// Auth Endpoints
export const GET_USER_ENDPOINT = `/user/profile`;
export const CREATE_USER_ENDPOINT = `/auth/signup`;
export const VERIFY_EMAIL_TOKEN_ENDPOINT = `/auth/verifyemailtoken`;
export const VERIFY_EMAIL_ENDPOINT = `/auth/verifyemail`;
export const LOGIN_USER_ENDPOINT = `/auth/login`;
export const FORGOT_PASSWORD_ENDPOINT = `/auth/forgotPassword`;
export const NEW_PASSWORD_ENDPOINT = `/auth/newPassword`;
export const FORGOT_PASSWORD_VERIFY_ENDPOINT = `/auth/verifyForgotPassToken`;
export const GOOGLE_AUTH_ENDPOINT = `/auth/google`;
export const LINKEDIN_AUTH_ENDPOINT = `/auth/linkedin`;
export const CHECK_USER_ENDPOINT = `/auth/checkUser`;
// Coaching Categories Endpoints
export const GET_COACHING_CATEGORIES_ENDPOINT = `/coaching-categories`;

export const IMAGE_URL = "https://purocoach-crm-assets.s3.amazonaws.com";
