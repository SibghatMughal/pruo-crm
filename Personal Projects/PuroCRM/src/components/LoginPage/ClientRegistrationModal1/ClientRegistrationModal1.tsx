"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ClientRegistrationModal1.module.css";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { toggleOpenClientRegistration2 } from "@/redux/slices/clientRegistrationSlice";
import {
  BASE_URL,
  GOOGLE_AUTH_ENDPOINT,
  LINKEDIN_AUTH_ENDPOINT,
} from "@/constants/endpoints";
import { checkUser, loginUser, verifyEmail } from "@/services/auth/auth";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  emailValue: string;
  setEmailValue: (value: string) => void;
  setLoading: (value: boolean) => void;
  setLoaderMsg: (value: string) => void;
  openForgetPasswordModal: (value: boolean) => void;
}

const ClientRegistrationModal1: FC<Props> = ({
  setIsOpen,
  modalIsOpen,
  setEmailValue,
  emailValue,
  setLoading,
  setLoaderMsg,
  openForgetPasswordModal,
}) => {
  const dispatch = useDispatch();

  const [passwordValue, setPasswordValue] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setIsOpen(false);
  }

  //to display error message
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [alreadyPresent, setAlreadyPresent] = useState(false);

  const router = useRouter();

  const submitRegistration = async () => {
    setEmailError("");

    if (!emailValue) {
      setEmailError("Email is required");
      return;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!emailValue.match(mailFormat)) {
      toast.error("Proper mail format is required");
      setEmailError("Proper mail format is required");
      return;
    }

    let domain = emailValue.split("@")[1];
    //allowed domains to access the platform
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
      toast.error("Proper mail format is required");
      setEmailError("Proper mail format is required");
      return;
    }

    try {
      const { data }: any = await checkUser({
        emailAddress: emailValue,
        userType: "CLIENT",
      });
      if (data.responseCode !== 200) {
        return toast.error(data.message);
      }
      const { data: verifyEmailData }: any = await verifyEmail({
        emailAddress: emailValue,
      });
      if (verifyEmailData.responseCode === 200) {
        toast.success(verifyEmailData.message);
        return dispatch(toggleOpenClientRegistration2(true));
      }
      return toast.error(verifyEmailData.message);
    } catch (error: any) {
      if (error.response.data.responseCode === 400) {
        setAlreadyPresent(true);
      }
      setEmailError(error.response.data.message);
      return toast.error(error.response.data.message);
    }
  };

  const login = async () => {
    setEmailError("");
    setPasswordError("");

    if (!passwordValue) {
      setPasswordError("Password is required");
    }

    if (!emailValue) {
      setEmailError("Email is required");
      return;
    }

    const mailFormat = /^\S+@\S+\.\S+$/;

    if (!emailValue.match(mailFormat)) {
      toast.error("Proper email format is required");
      setEmailError("Proper email format is required");
      return;
    }

    let domain = emailValue.split("@")[1];
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
        emailAddress: emailValue,
        password: passwordValue,
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

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <div className={styles.leftHeader__left} onClick={proceedLogin}>
          <div className={styles.backIcon}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-left.png"
              alt=""
            />
          </div>
          <h3>Back to Login</h3>
        </div>
        <div className={styles.left__logo}>
          <img
            src="https://purocoach-crm-assets.s3.amazonaws.com/icons/logo.png"
            alt=""
          />
        </div>
        <p className={styles.info}>Client Registration</p>
        <div className={styles.buttonLayout}>
          <a href={BASE_URL + GOOGLE_AUTH_ENDPOINT + "/client"}>
            <button className={styles.buttonContainer}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/google-icon.png"
                alt=""
              />
              <p>Register with Google</p>
            </button>
          </a>
          <a href={BASE_URL + LINKEDIN_AUTH_ENDPOINT + "/client"}>
            <button className={styles.buttonContainer}>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/linkedin-icon.png"
                alt=""
              />
              <p>Register with LinkedIn</p>
            </button>
          </a>
        </div>
        <div className={styles.or}>
          <p>Or</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
            if (e.target.value) {
              setEmailError("");
            }
          }}
        />

        {emailError && <p className={styles.error}>{emailError}</p>}

        {alreadyPresent && (
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={passwordValue}
            onChange={(e) => {
              setPasswordValue(e.target.value);
              if (e.target.value) {
                setPasswordError("");
              }
            }}
          />
        )}

        {passwordError && <p className={styles.error}>{passwordError}</p>}

        {alreadyPresent && (
          <div className={styles.forgotContainer}>
            <div className={styles.remember}>
              <input type="checkbox" name="" id="" />
              <p>Remember Me</p>
            </div>
            <div
              onClick={() => {
                setIsOpen(false);
                openForgetPasswordModal(true);
              }}
            >
              <p>Forgot your password?</p>
            </div>
          </div>
        )}

        <div className={styles.buttons}>
          <button
            className={styles.register}
            onClick={alreadyPresent ? login : submitRegistration}
            disabled={emailValue ? false : true}
          >
            {alreadyPresent ? "Login" : "Continue"}
          </button>
          <button className={styles.cancel} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ClientRegistrationModal1;
