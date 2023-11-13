import { getCookies } from "@/utils/cookies";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { redirect } from "next/navigation";
import React from "react";
import SetUser from "./SetUser";

//handles the user logged in state by checking whether jwt token is in cookies or not
const Authenticated = async ({ children }: { children: React.ReactNode }) => {
  //to check the cookies and give a small delay while refereshing the page
  const token = await getCookies("jwt");

  setTimeout(async () => {
    const token = await getCookies("jwt");

    // try {
    //   const data = await axios.get("http://localhost:4000/api/user/profile", {
    //     headers: {
    //       Authorization: `Bearer ${token?.value}`,
    //     },
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    if (!token?.value) {
      return redirect("/login");
    }
  }, 500);

  return <SetUser token={token?.value}>{children}</SetUser>;
};

export default Authenticated;
