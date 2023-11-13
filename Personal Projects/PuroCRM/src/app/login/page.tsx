"use client";

import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleOpenCoachSignup1,
  toggleOpenCoachSignup2,
  toggleOpenCoachSignup3,
  toggleOpenCoachSignup4,
} from "@/redux/slices/coachSignupSlice";
import {
  toggleOpenCreateAccount,
  toggleOpenForgetPassword,
} from "@/redux/slices/accountSlice";
import {
  toggleOpenClientRegistration1,
  toggleOpenClientRegistration3,
} from "@/redux/slices/clientRegistrationSlice";

import {
  ClientRegistrationModal1,
  ClientRegistrationModal2,
  ClientRegistrationModal3,
  CoachSignupModal1,
  CoachSignupModal2,
  CoachSignupModal3,
  CoachSignupModal4,
  CreateAccountModal,
  ForgotPasswordModal,
  LoadingSpinner,
  RegistrationSuccessModal,
  SignupSuccessModal,
} from "@/components";

import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { setUser } from "@/redux/slices/userSlice";
import { loginUser } from "@/services/auth/auth";
import {
  BASE_URL,
  GOOGLE_AUTH_ENDPOINT,
  LINKEDIN_AUTH_ENDPOINT,
} from "@/constants/endpoints";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const statusCode = searchParams.get("statusCode") || null;
  const userRole = searchParams.get("role") || null;
  const paramsEmail = searchParams.get("email") || null;
  // console.log(statusCode);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [togglePassword, setTogglePassword] = useState(false);

  const isCreateAccountOpen = useSelector(
    (state: any) => state.accountInfo.openCreateAccount
  );

  const isClientRegistration1Open = useSelector(
    (state: any) => state.clientRegistrationInfo.openClientRegistration1
  );

  const isClientRegistration2Open = useSelector(
    (state: any) => state.clientRegistrationInfo.openClientRegistration2
  );

  const isClientRegistration3Open = useSelector(
    (state: any) => state.clientRegistrationInfo.openClientRegistration3
  );

  const isForgetPasswordOpen = useSelector(
    (state: any) => state.accountInfo.openForgetPassword
  );

  const isCoachSignup1Open = useSelector(
    (state: any) => state.coachSignupInfo.openCoachSignup1
  );

  const isCoachSignup2Open = useSelector(
    (state: any) => state.coachSignupInfo.openCoachSignup2
  );

  const isCoachSignup3Open = useSelector(
    (state: any) => state.coachSignupInfo.openCoachSignup3
  );

  const isCoachSignup4Open = useSelector(
    (state: any) => state.coachSignupInfo.openCoachSignup4
  );

  const openCreateAccountModal = (state: boolean) => {
    dispatch(toggleOpenCreateAccount(state));
  };

  const openClientRegistrationModal1 = (state: boolean) => {
    dispatch(toggleOpenClientRegistration1(state));
  };

  const openClientRegistrationModal3 = (state: boolean) => {
    dispatch(toggleOpenClientRegistration3(state));
  };
  const openForgetPasswordModal = (state: boolean) => {
    dispatch(toggleOpenForgetPassword(state));
  };

  const openCoachSignup1Modal = (state: boolean) => {
    dispatch(toggleOpenCoachSignup1(state));
  };

  const openCoachSignup2Modal = (state: boolean) => {
    dispatch(toggleOpenCoachSignup2(state));
  };

  const openCoachSignup3Modal = (state: boolean) => {
    dispatch(toggleOpenCoachSignup3(state));
  };

  const openCoachSignup4Modal = (state: boolean) => {
    dispatch(toggleOpenCoachSignup4(state));
  };

  const [coachSuccess, setCoachSuccess] = useState(false);
  const [clientSuccess, setClientSuccess] = useState(false);

  //client registration email
  const [emailValue, setEmailValue] = useState(paramsEmail || "");

  const passwordRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const [loading, setLoading] = useState(false);
  const [loaderMsg, setLoaderMsg] = useState("Please wait...");

  const login = async () => {
    setEmailError("");
    setPasswordError("");

    if (!password) {
      setPasswordError("Password is required");
    }

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!email.match(mailFormat)) {
      toast.error("Proper email format is required");
      setEmailError("Proper email format is required");
      return;
    }

    let domain = email.split("@")[1];
    let domains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "mail.com",
    ];

    let isThere = domains.find((val) => val === domain);

    if (!isThere) {
      toast.error("Proper email format is required");
      setEmailError("Proper email format is required");
      return;
    }
    setLoading(true);
    setLoaderMsg("Please wait while we log you in...");
    try {
      const response: any = await loginUser({
        emailAddress: email,
        password: password,
      });

      // if (response.data.data?.userType === "CLIENT") {
      //   router.push("/client-portal");
      // }
      if (response.data?.data) {
        dispatch(setUser(response.data.data));
        toast.success(response.data?.data.message);
        const urlWithoutQuery = window.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQuery);
        if (response.data.data.client && response.data.data.coach) {
          return router.replace("/my-portals");
        }
        return router.replace(
          `${response.data?.data.userType.toLowerCase()}-portal`
        );
      }
      toast.error(response.data.data.message);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      return toast.error(
        error?.response?.data?.message || error?.response?.data?.data?.message
      );
    }
  };

  const validateEmail = (value: string) => {
    setEmailError("");

    if (!value) {
      setEmailError("Email is required");
      return;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!value.match(mailFormat)) {
      setEmailError("Proper email format is required");
      return;
    }

    let domain = value.split("@")[1];
    let domains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "mail.com",
    ];

    let isThere = domains.find((val) => val === domain);

    if (!isThere) {
      setEmailError("Proper email format is required");
      return;
    }
    setEmailError("");
    passwordRef?.current?.focus();
  };

  // const googleLogin = async () => {
  //   signIn("google", {});
  // };

  useEffect(() => {
    if (statusCode === "404") {
      toast.error("No user found, Please register yourself.");
      openCreateAccountModal(true);
      const urlWithoutQuery = window?.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutQuery);
    }
    if (statusCode === "400") {
      toast.error("User already registered, please login to continue");
      const urlWithoutQuery = window?.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutQuery);
    }
    if (statusCode === "403") {
      toast.error("Please complete registration for your profile");
      const urlWithoutQuery = window?.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutQuery);
    }
    if (statusCode === "201") {
      toast.success(
        "User registered successfully as " + userRole?.toLowerCase()
      );
      if (userRole?.toLowerCase() === "client") {
        const urlWithoutQuery = window?.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQuery);
        return openClientRegistrationModal3(true);
      }
      const urlWithoutQuery = window?.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutQuery);
      return openCoachSignup2Modal(true);
    }
    if (statusCode === "200") {
      toast.success(
        "User logged in successfully as " + userRole?.toLowerCase()
      );
      if (userRole?.toLowerCase() === "client") {
        const urlWithoutQuery = window?.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQuery);
        return router.replace("/client-portal");
      }
      if (userRole?.toLowerCase() === "coach") {
        const urlWithoutQuery = window?.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQuery);
        return router.replace("/coach-portal");
      }
      if (userRole?.toLowerCase() === "admin") {
        return router.push("/admin-portal");
      }
    }
  }, [statusCode]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <h3>{loaderMsg}</h3>
        <LoadingSpinner size={80} color="#304880" />
      </div>
    );
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.login}>
          <div className={styles.left}>
            <div className={styles.leftTop}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
                alt=""
                className={styles.leftLogo}
              />
              <h1 className={styles.title}>Hi, welcome!</h1>
              <h1 className={styles.title2}>Please Login.</h1>
            </div>
            <div className={styles.inputContainer}>
              <label>Email</label>
              <br />
              <div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/email-password.png"
                  alt=""
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Tab" && emailError) {
                      e.preventDefault();
                      validateEmail(email);
                    }
                  }}
                />
              </div>
            </div>
            {emailError && (
              <div className={styles.errorContainer}>
                <p className={styles.error}>{emailError}</p>{" "}
              </div>
            )}
            <div className={styles.inputContainer}>
              <label>Password</label>
              <br />
              <div className={styles.passwordContainer}>
                <div>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/password.png"
                    alt=""
                  />
                  <input
                    ref={passwordRef}
                    type={togglePassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onFocus={() => validateEmail(email)}
                  />
                </div>
                {togglePassword ? (
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/hide-password.png"
                    className={styles.toggleImg}
                    alt=""
                    onClick={() => setTogglePassword(false)}
                  />
                ) : (
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/view-password.png"
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
            <div className={styles.forgotContainer}>
              <div className={styles.remember}>
                <input type="checkbox" name="" id="" />
                <p>Remember Me</p>
              </div>
              <div onClick={() => openForgetPasswordModal(true)}>
                <p>Forgot your password?</p>
              </div>
            </div>

            <button className={styles.loginButton} onClick={login}>
              Login
            </button>

            <div className={styles.createNewAccount}>
              <p>
                Not registered yet?{" "}
                <span onClick={() => openCreateAccountModal(true)}>
                  Create an account
                </span>
              </p>
            </div>
            <div className={styles.or}>
              <p>Or</p>
            </div>

            <div className={styles.buttonLayout}>
              <a href={BASE_URL + GOOGLE_AUTH_ENDPOINT}>
                <button className={styles.buttonContainer}>
                  <img src="assets/icons/google-icon.png" alt="" />
                  <p>Sign in with Google</p>
                </button>
              </a>
              <a href={BASE_URL + LINKEDIN_AUTH_ENDPOINT}>
                <button className={styles.buttonContainer}>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/linkedin-icon.png"
                    alt=""
                  />
                  <p>Sign in with LinkedIn</p>
                </button>
              </a>
            </div>
          </div>
          <div className={styles.copyright}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/reserved-vector.png"
              alt=""
            />
            <p>All rights reserved</p>
          </div>
        </div>
        <div className={styles.copyright__mobile}>
          <img
            src="https://purocoach-crm-assets.s3.amazonaws.com/icons/reserved-vector.png"
            alt=""
          />
          <p>All rights reserved</p>
        </div>
        <div className={styles.right}>
          <div
            className={`${
              isForgetPasswordOpen
                ? styles.right__forgetPwdImg
                : styles.right__productsImg
            }`}
          >
            <img
              src={
                isForgetPasswordOpen
                  ? "https://purocoach-crm-assets.s3.amazonaws.com/signin/forget-password.png"
                  : "https://purocoach-crm-assets.s3.amazonaws.com/signin/products.png"
              }
              alt=""
            />
          </div>
          {!isForgetPasswordOpen && (
            <div className={styles.bottomContainer}>
              <p>
                We run the engine that drives <br /> your coaching business
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <CreateAccountModal
          modalIsOpen={isCreateAccountOpen}
          setIsOpen={openCreateAccountModal}
        />
        <ClientRegistrationModal1
          modalIsOpen={isClientRegistration1Open}
          setIsOpen={openClientRegistrationModal1}
          emailValue={emailValue}
          setEmailValue={setEmailValue}
          setLoading={(value: boolean) => setLoading(value)}
          setLoaderMsg={(value: string) => setLoaderMsg(value)}
          openForgetPasswordModal={openForgetPasswordModal}
        />
        <ClientRegistrationModal2
          modalIsOpen={isClientRegistration2Open}
          emailValue={emailValue}
        />
        <ClientRegistrationModal3
          modalIsOpen={isClientRegistration3Open}
          setIsOpen={openClientRegistrationModal3}
          emailValue={emailValue}
          setSuccess={setClientSuccess}
        />
        <RegistrationSuccessModal
          modalIsOpen={clientSuccess}
          setIsOpen={setClientSuccess}
          setLoading={(value: boolean) => setLoading(value)}
          setLoaderMsg={(value: string) => setLoaderMsg(value)}
        />
        <ForgotPasswordModal
          modalIsOpen={isForgetPasswordOpen}
          setIsOpen={openForgetPasswordModal}
          openCreateAccountModal={openCreateAccountModal}
        />
        <CoachSignupModal1
          modalIsOpen={isCoachSignup1Open}
          setIsOpen={openCoachSignup1Modal}
          emailValue={emailValue}
          setEmailValue={setEmailValue}
        />
        <CoachSignupModal2
          modalIsOpen={isCoachSignup2Open}
          setIsOpen={openCoachSignup2Modal}
          emailValue={emailValue}
        />
        <CoachSignupModal3
          modalIsOpen={isCoachSignup3Open}
          setIsOpen={openCoachSignup3Modal}
          emailValue={emailValue}
        />
        <CoachSignupModal4
          modalIsOpen={isCoachSignup4Open}
          setIsOpen={openCoachSignup4Modal}
          setSuccess={setCoachSuccess}
          setLoading={(value: boolean) => setLoading(value)}
          setLoaderMsg={(value: string) => setLoaderMsg(value)}
        />
        <SignupSuccessModal
          modalIsOpen={coachSuccess}
          setIsOpen={setCoachSuccess}
          setLoading={(value: boolean) => setLoading(value)}
          setLoaderMsg={(value: string) => setLoaderMsg(value)}
        />
      </div>
    </div>
  );
};

export default LoginPage;
