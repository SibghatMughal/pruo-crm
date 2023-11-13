"use client";

import { setUser } from "@/redux/slices/userSlice";
import { getUserInfo } from "@/services/auth/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SetUser = ({
  children,
  token,
}: {
  children: React.ReactNode;
  token?: string;
}) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.userInfo.user);
  console.log("client", token);

  useEffect(() => {
    const getData = async () => {
      const userInfo = await getUserInfo(token);
      console.log(userInfo);
      dispatch(setUser(userInfo?.data));
    };
    if (!user) {
      getData();
    }
  }, [user]);

  return <div>{children}</div>;
};

export default SetUser;
