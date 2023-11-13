"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./CreateProfileModal17.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { getCoachingCategories } from "@/services/coaching-categories";
import { toast } from "react-toastify";
import { Chip } from "@/components";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  selectedOptions: any[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<any>>;
  closeModal: () => void;
}

let options = [
  { id: 1, name: "ICF Certified" },
  { id: 2, name: "Master Certified Coach (MCC)" },
  { id: 3, name: "EC GM - Business Strategy" },
  { id: 4, name: "EC GM - Foundations of Management" },
];

const CreateProfileModal17: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  selectedOptions,
  setSelectedOptions,
  closeModal,
}) => {
  const [allOptions, setAllOptions] = useState<any[]>(options);
  const [openCoachingOptions, setOpenCoachingOptions] = useState(false);

  // useEffect(() => {
  //   const getCategories = async () => {
  //     try {
  //       const { data }: any = await getCoachingCategories();
  //       setAllOptions(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getCategories();
  // }, []);

  //add coaching options to the selected options
  const addOption = (option: any) => {
    let isThere = selectedOptions.find((elem: any) => elem.id === option.id);

    if (isThere) {
      return;
    }

    if (selectedOptions.length === 3) {
      toast.warn(
        "Only 3 coaching categories are allowed. Please close the box and continue...",
        {
          autoClose: 7000,
        }
      );
      return;
    }

    setSelectedOptions((curr: any) => {
      return [...curr, option];
    });

    if (allOptions.length === 1) {
      setOpenCoachingOptions(false);
    }

    setAllOptions((curr: any) => {
      return curr.filter((elem: any) => elem.id !== option.id);
    });
  };

  //remove coaching options from the selected options
  const removeOption = (option: any) => {
    setSelectedOptions((options: any) => {
      return options.filter((item: any) => item.id !== option.id);
    });

    setAllOptions((options: any) => {
      return [...options, option];
    });

    setOpenCoachingOptions(true);
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>What are your qualifications?</h3>
        <h4>
          Select all certifications from the below list that you&apos;ve
          obtained.
        </h4>
        <p>
          All selected items must show proof by submitting supporting documents
          before your profile can be approved.
        </p>
        <div
          className={styles.dropdown}
          onClick={() => setOpenCoachingOptions((curr) => !curr)}
        >
          {selectedOptions.length === 0 ? (
            <p>Certificates</p>
          ) : (
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
          )}
          <img
            src={
              openCoachingOptions
                ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
            }
            alt=""
            className={openCoachingOptions ? styles.upArrow : styles.downArrow}
          />
        </div>

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

        <ModalBottomContainer nextStep={nextStep} prevStep={prevStep} />

        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
          onClick={closeModal}
        />
      </div>
    </Modal>
  );
};

export default CreateProfileModal17;
