"use client";

import React, { FC, useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./CoachSignupModal3.module.css";
import { Stepper, Chip } from "@/components";
import {
  toggleOpenCoachSignup1,
  toggleOpenCoachSignup3,
  toggleOpenCoachSignup4,
} from "@/redux/slices/coachSignupSlice";
import { useDispatch } from "react-redux";
import countryList from "react-select-country-list";
import { getCoachingCategories } from "@/services/coaching-categories";

// const options = [
//   "Life Coaching",
//   "Business Coaching",
//   "Health & Welness Coaching",
//   "Career Development Coaching",
//   "Public Speaking Coaching",
//   "Fitness Coaching",
//   "Leadership Coaching",
//   "Relationship Coaching",
// ];

interface Props {
  setIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  emailValue: string;
}

const CoachSignupModal3: FC<Props> = ({
  setIsOpen,
  modalIsOpen,
  emailValue,
}) => {
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function proceedLogin() {
    setIsOpen(false);
  }

  const goBack = () => {
    // dispatch(toggleOpenCoachSignup1(true));
  };

  const [coachingCategoryError, setCoachingCategoryError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [websiteError, setWebsiteError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  const continueNow = () => {
    setCoachingCategoryError(false);
    setCountryError(false);
    setCompanyError(false);
    setWebsiteError(false);

    if (selectedOptions.length === 0) {
      setCoachingCategoryError(true);
      return;
    }

    if (companyName === "") {
      setCompanyError(true);
      return;
    }

    if (websiteValue.split("//")[1] === "") {
      setWebsiteError(true);
      return;
    }

    if (selectedCountry === "") {
      setCountryError(true);
      return;
    }

    const stringifiedObj = JSON.stringify({
      ...(selectedCountry && { countryId: selectedCountry }),
      ...(websiteValue && { website: websiteValue }),
      ...(selectedOptions.length && { coachCategory: selectedOptions }),
      ...(companyName && { companyName }),
      ...(emailValue && { emailAddress: emailValue }),
    });
    localStorage.setItem("coach_signup", stringifiedObj);
    dispatch(toggleOpenCoachSignup4(true));
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [allOptions, setAllOptions] = useState<string[]>([]);
  const [openCoachingOptions, setOpenCoachingOptions] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [openCountryList, setOpenCountryList] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const [websiteValue, setWebsiteValue] = useState("https://");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data }: any = await getCoachingCategories();
        setAllOptions(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  //add coaching categories to selected categories
  const addOption = (option: string) => {
    let isThere = selectedOptions.find((elem) => elem === option);

    if (isThere) {
      return;
    }

    setSelectedOptions((curr) => {
      return [...curr, option];
    });

    if (allOptions.length === 1) {
      setOpenCoachingOptions(false);
    }

    setAllOptions((curr) => {
      return curr.filter((elem) => elem !== option);
    });
  };

  //remove coaching categories to selected categroies
  const removeOption = (option: string) => {
    setSelectedOptions((options) => {
      return options.filter((item) => item !== option);
    });

    setAllOptions((options) => {
      return [...options, option];
    });

    setOpenCoachingOptions(true);
  };

  const checkForm = () => {
    selectedOptions.length === 0
      ? setCoachingCategoryError(true)
      : setCoachingCategoryError(false);
    selectedCountry === "" ? setCountryError(true) : setCountryError(false);
    companyName === "" ? setCompanyError(true) : setCompanyError(false);
    websiteValue.split("//")[1] === ""
      ? setWebsiteError(true)
      : setWebsiteError(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.leftHeader__left} onClick={proceedLogin}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/create-account/back.png"
              alt=""
            />
            <h3>Back to Login</h3>
          </div>
          <div className={styles.left__logo}>
            <img
              src="https://purocoach-crm-assets.s3.amazonaws.com/logo2.png"
              alt=""
            />
          </div>
          <h1 className={styles.title}>Sign-up</h1>
          <h1 className={styles.title2}>
            Answer five more questions and we&apos;ll get you into your
            free-trial
          </h1>
          <Stepper activeStep={3} />
          <p className={styles.info}>
            Complete the form to start your free trial. Our team will be in
            touch to help you make the most of your trial.
          </p>
          <div className={styles.dropdownContainer}>
            <label>Coaching Category</label>
            <br />
            <div
              className={styles.dropdown}
              onClick={() => setOpenCoachingOptions((curr) => !curr)}
            >
              <div className={styles.selectedOptions}>
                {selectedOptions.map((option, index) => {
                  return (
                    <Chip
                      key={index}
                      option={option}
                      addOption={addOption}
                      selected
                      removeOption={removeOption}
                    />
                  );
                })}
              </div>
              <img
                src={
                  openCoachingOptions
                    ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                    : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                }
                alt=""
                className={
                  openCoachingOptions ? styles.upArrow : styles.downArrow
                }
              />
            </div>
          </div>

          {coachingCategoryError && (
            <p className={styles.error}>Coaching Category is required</p>
          )}

          {openCoachingOptions && allOptions.length > 0 && (
            <div className={styles.dropdownOptions}>
              {allOptions.map((option, index) => {
                return (
                  <Chip
                    key={index}
                    option={option}
                    addOption={addOption}
                    selected={false}
                    removeOption={function (value: string): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                );
              })}
              <div
                className={styles.exitIcon}
                onClick={() => setOpenCoachingOptions(false)}
              >
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/client-registration/exit-box.png"
                  alt=""
                />
              </div>
            </div>
          )}
          <div className={styles.inputContainer}>
            <label>Company Name</label>
            <br />
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              onFocus={() => checkForm()}
            />
          </div>

          {companyError && (
            <p className={styles.error}>Company Name is required</p>
          )}

          <div className={styles.inputContainer}>
            <label>Website</label>
            <br />
            <input
              type="text"
              placeholder="https://"
              value={websiteValue}
              onChange={(e) => setWebsiteValue(e.target.value)}
              onFocus={() => checkForm()}
              onBlur={() => checkForm()}
            />
          </div>

          {websiteError && <p className={styles.error}>Website is required</p>}

          <div className={styles.countryList}>
            <div
              className={styles.countryPickerContainer}
              onFocus={() => checkForm()}
            >
              <label>Country</label>
              <br />
              <div
                className={styles.countryPicker}
                onClick={() => setOpenCountryList((curr) => !curr)}
              >
                <div className={styles.selectedOption}>
                  <p
                    className={
                      selectedCountry
                        ? styles.countrySelected
                        : styles.countryUnSelected
                    }
                  >
                    {selectedCountry ? selectedCountry : "United States"}
                  </p>
                </div>
                <img
                  src={
                    openCountryList
                      ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                      : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                  }
                  alt=""
                  className={
                    openCountryList ? styles.upArrow : styles.downArrow
                  }
                />
              </div>
            </div>

            {countryError && (
              <p className={styles.error}>Country is required</p>
            )}

            {openCountryList && (
              <div className={styles.countryOptions}>
                <p
                  onClick={() => {
                    setSelectedCountry("United States");
                    setOpenCountryList(false);
                    checkForm();
                  }}
                >
                  United States
                </p>
                {countryList()
                  .getData()
                  .map((country, index) => {
                    if (country.label === "United States") {
                      return;
                    }
                    return (
                      <p
                        key={index}
                        onClick={() => {
                          setSelectedCountry(country.label);
                          setOpenCountryList(false);
                          checkForm();
                        }}
                      >
                        {country.label}
                      </p>
                    );
                  })}
              </div>
            )}
          </div>

          <div className={styles.buttonLayout}>
            <button className={styles.backButton} onClick={goBack}>
              Back
            </button>
            <button className={styles.nextButton} onClick={continueNow}>
              Next
            </button>
          </div>
        </div>
        <div className={styles.copyright}>
          <img
            src="https://purocoach-crm-assets.s3.amazonaws.com/icons/reserved-vector.png"
            alt=""
          />
          <p>2023 PUROCoach. All rights reserved</p>
        </div>
      </div>
    </Modal>
  );
};

export default CoachSignupModal3;
