"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./Resetpassword.module.css";
import { ResetPasswordSuccessModal } from "@/components";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { newPassword, verifyForgotPassword } from "@/services/auth/auth";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdStrength, setPwdStrength] = useState(0);
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || null;
  const passwordRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;
  const confirmPasswordRef = useRef(
    null
  ) as MutableRefObject<HTMLInputElement | null>;

  //validates the password
  const passwordChecker = (value: string) => {
    //Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    const passwordFormat =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;

    let totalStrength = 0;

    if (password) {
      if (value.length >= 8 && value.length <= 20) {
        totalStrength += 50;
      }
      if (value.match(passwordFormat)) {
        totalStrength += 50;
      }
      setPwdStrength(totalStrength);
    } else {
      setPwdStrength(0);
    }
  };

  //autocapitalize the name
  const capitalize = (value: string | any): string => {
    let result = "";
    if (value) {
      let names = value.split(" ");
      for (let index = 0; index < names.length; index++) {
        if (names[index]) {
          names[index] = names[index][0].toUpperCase() + names[index].substr(1);
        }
      }
      result = names.join(" ");
    }
    return result;
  };

  //checks for name in keystroeks
  const checkForm = () => {
    //checkName();
  };

  const handleVerifyForgotPassword = async () => {
    if (token) {
      try {
        const { data }: any = await verifyForgotPassword({
          token,
        });
        console.log(data);
        if (data.responseCode !== 200) {
          toast.error(data?.message);
        }
        setEmail(data.data.emailAddress);
        passwordRef?.current?.focus();
      } catch (error: any) {
        console.log(error);
        toast.error(error?.message);
      }
    }
  };

  useEffect(() => {
    handleVerifyForgotPassword();
  }, [token]);

  const handleResetPassword = async () => {
    if (!passwordRef.current?.value) {
      return setPasswordError("Password is required");
    }
    if (!confirmPasswordRef.current?.value) {
      return setConfirmPasswordError("Confirm password is required");
    }
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      if (!email) {
        return toast.error("This link is not valid.");
      }
      const { data }: any = await newPassword({
        emailAddress: email,
        newPassword: password,
      });
      if (data.responseCode === 200) {
        toast.success(data.message);
        return setIsOpen(true);
      }
      toast.error(data.message);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/login">
            <div className={styles.leftHeader__left}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/create-account/back.png"
                alt=""
              />
              <h3>Back to Login</h3>
            </div>
          </Link>
          <div className={styles.left__logo}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/logo2.png"
              alt=""
            />
          </div>
          <h1 className={styles.title}>Please enter your new password</h1>
          <div className={styles.inputContainer}>
            <label>Password</label>
            <br />
            <div className={styles.passwordContainer}>
              <div>
                <img src="assets/icons/password.png" alt="" />
                <input
                  type={togglePassword ? "text" : "password"}
                  maxLength={20}
                  onFocus={() => {
                    checkForm();
                  }}
                  ref={passwordRef}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    passwordChecker(e.target.value);
                    if (e.target.value) {
                      setPasswordError("");
                    }
                  }}
                  // onBlur={() => {
                  //   if (password.length < 8) {
                  //     setPasswordError(
                  //       "Password must be at least 8 characters long."
                  //     );
                  //   } else {
                  //     setPasswordError("");
                  //   }
                  // }}
                />
              </div>
              {togglePassword ? (
                <img
                  src="assets/icons/hide-password.png"
                  className={styles.toggleImg}
                  alt=""
                  onClick={() => setTogglePassword(false)}
                />
              ) : (
                <img
                  src="assets/icons/view-password.png"
                  className={styles.toggleImg}
                  alt=""
                  onClick={() => setTogglePassword(true)}
                />
              )}
            </div>
          </div>
          {passwordError && (
            <div className={styles.errorContainer}>
              <p className={styles.error}>{passwordError}</p>{" "}
            </div>
          )}
          {
            <div className={styles.passwordChecker}>
              <p>Password must:</p>
              <div className={styles.passwordChecker__item}>
                <div
                  className={`${
                    pwdStrength < 50
                      ? styles.passwordCheckerCircle
                      : styles.passwordCheckerCircle__passed
                  }`}
                ></div>
                <p>Be between 8 to 20 characters</p>
              </div>
              <div className={styles.passwordChecker__item}>
                <div
                  className={`${
                    pwdStrength > 50
                      ? styles.passwordCheckerCircle__passed
                      : styles.passwordCheckerCircle
                  }`}
                ></div>
                <p>Include atleast</p>
              </div>
              <ul>
                <li>An uppercase letter</li>
                <li>A lowercase letter </li>
                <li>A number between 0 - 9</li>
                <li>A special character</li>
              </ul>
            </div>
          }

          <div className={styles.inputContainer}>
            <label>Re-enter password</label>
            <br />
            <div className={styles.passwordContainer}>
              <div>
                <img src="assets/icons/password.png" alt="" />
                <input
                  type={toggleConfirmPassword ? "text" : "password"}
                  ref={confirmPasswordRef}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    passwordChecker(e.target.value);
                    if (e.target.value) {
                      // @ts-ignore
                      setConfirmPasswordError(false);
                    }
                  }}
                  // onBlur={() => {
                  //   if (confirmPassword !== password) {
                  //     setPasswordError("Passwords do not match.");
                  //   } else {
                  //     setPasswordError("");
                  //   }
                  // }}
                />
              </div>
              {toggleConfirmPassword ? (
                <img
                  src="assets/icons/hide-password.png"
                  className={styles.toggleImg}
                  alt=""
                  onClick={() => setToggleConfirmPassword(false)}
                />
              ) : (
                <img
                  src="assets/icons/view-password.png"
                  className={styles.toggleImg}
                  alt=""
                  onClick={() => setToggleConfirmPassword(true)}
                />
              )}
            </div>
          </div>
          {confirmPasswordError && (
            <div className={styles.errorContainer}>
              <p className={styles.error}>{confirmPasswordError}</p>{" "}
            </div>
          )}
          <div className={styles.forgotContainer}></div>
          <button className={styles.resetButton} onClick={handleResetPassword}>
            Reset Password
          </button>
        </div>
        <div className={styles.right}>
          <div className={styles.right__productsImg}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/signin/forget-password.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <ResetPasswordSuccessModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default ResetPasswordPage;
