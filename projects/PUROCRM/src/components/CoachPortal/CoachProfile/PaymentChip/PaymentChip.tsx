"use client";

import React, { FC } from "react";
import styles from "./PaymentChip.module.css";

interface Props {
  option: any;
  //   icon: string;
  addOption: (value: string) => void;
  removeOption: (value: string) => void;
  selected: boolean;
}

const PaymentChip: FC<Props> = ({
  option,
  addOption,
  selected,
  removeOption,
  //   icon,
}) => {
  return (
    <div
      className={`${styles.chip} ${selected ? styles.selected : ""}`}
      onClick={(event) => {
        event.stopPropagation();
        addOption(option);
      }}
    >
      <img src={option?.icon} alt="" />
      <h4>{option.name}</h4>
      {selected && (
        <img
          src="https://purocoach-crm-assets.s3.amazonaws.com/client-registration/close.png"
          onClick={() => removeOption(option)}
        />
      )}
    </div>
  );
};

export default PaymentChip;
