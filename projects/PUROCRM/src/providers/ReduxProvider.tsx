"use client";

import React, { FC } from "react";
import store from "@/redux/store";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

//provides redux store data throughoutnextjs
const Providers: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
