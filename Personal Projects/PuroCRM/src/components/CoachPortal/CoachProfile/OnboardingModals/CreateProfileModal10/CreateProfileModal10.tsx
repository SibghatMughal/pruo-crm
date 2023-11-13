"use client";

import React, { FC, useEffect, useState } from "react";
import styles from "./CreateProfileModal10.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { getCoachingCategories } from "@/services/coaching-categories";
import { toast } from "react-toastify";
import { CoachPaymentChip } from "@/components/CoachPortal/CoachProfile";
import { ModalBottomContainer } from "@/components/CoachPortal/CoachProfile";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  closeModal: () => void;
}

let options = [
  { name: "Debit/Credit", icon: `${IMAGE_URL}/coach-portal/debit-card.svg` },
  { name: "Checks", icon: `${IMAGE_URL}/coach-portal/cheque.svg` },
  { name: "Venmo", icon: `${IMAGE_URL}/coach-portal/venmo.svg` },
  { name: "Zelle", icon: `${IMAGE_URL}/coach-portal/zelle.svg` },
  { name: "Paypal", icon: `${IMAGE_URL}/coach-portal/paypal.svg` },
];

const CreateProfileModal10: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
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

  console.log("openCoachingOptions", openCoachingOptions);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>What is your preferred payment method?</h3>

        <div
          className={styles.dropdown}
          onClick={() => setOpenCoachingOptions((curr) => !curr)}
        >
          {selectedOptions.length === 0 ? (
            <p>Payment Methods</p>
          ) : (
            <div className={styles.selectedOptions}>
              {selectedOptions.map((option, index) => {
                return (
                  <CoachPaymentChip
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
                <CoachPaymentChip
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
                src={`${IMAGE_URL}/client-registration/exit-box.png`}
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

export default CreateProfileModal10;
