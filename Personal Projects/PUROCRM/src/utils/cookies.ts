"use server";

import { cookies } from "next/headers";

//get cookies from the browser
export const getCookies = async (name: string) => {
  return await cookies().get(name);
};

//delete cookies from the browser
export const deleteCookies = (name: string) => {
  return cookies().set(name, "");
};
