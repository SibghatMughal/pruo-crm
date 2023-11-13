"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Setup2FA.module.css";
import {
  Screen1Modal,
  Screen2Modal,
  Screen3Modal,
  Screen4Modal,
  Screen5Modal,
  Screen6Modal,
  SuccessModal,
} from "@/components";

//twofa setup page
const Setup2FA = () => {
  const isScreen1Open = useSelector(
    (state: any) => state.twoFAInfo.openScreen1
  );

  const isScreen2Open = useSelector(
    (state: any) => state.twoFAInfo.openScreen2
  );

  const isScreen3Open = useSelector(
    (state: any) => state.twoFAInfo.openScreen3
  );

  const isScreen4Open = useSelector(
    (state: any) => state.twoFAInfo.openScreen4
  );

  const isScreen5Open = useSelector(
    (state: any) => state.twoFAInfo.openScreen5
  );

  const isScreen6Open = useSelector(
    (state: any) => state.twoFAInfo.openScreen6
  );

  const [textSuccess, setTextSuccess] = useState(false);

  return (
    <div className={styles.container}>
      {/* intial welcome modal for setting up 2fa */}
      <Screen1Modal modalIsOpen={isScreen1Open} />
      {/* 2fa options to select for the user */}
      <Screen2Modal modalIsOpen={isScreen2Open} />
      {/* phone verification modal */}
      <Screen3Modal modalIsOpen={isScreen3Open} />
      {/* email verification modal */}
      <Screen4Modal modalIsOpen={isScreen4Open} />
      {/* phone verification modal to enter otp */}
      <Screen5Modal modalIsOpen={isScreen5Open} setSuccess={setTextSuccess} />
      {/* email verification modal to enter otp */}
      <Screen6Modal modalIsOpen={isScreen6Open} setSuccess={setTextSuccess} />
      {/* success modal once verified */}
      <SuccessModal modalIsOpen={textSuccess} setIsOpen={setTextSuccess} />
    </div>
  );
};

export default Setup2FA;
