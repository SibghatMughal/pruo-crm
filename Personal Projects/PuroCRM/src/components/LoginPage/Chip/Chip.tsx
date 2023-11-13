"use client";

import React, { FC } from "react";
import styles from "./Chip.module.css";

interface Props {
  option: any;
  addOption: (value: string) => void;
  removeOption: (value: string) => void;
  selected: boolean;
}

const Chip: FC<Props> = ({ option, addOption, selected, removeOption }) => {
  return (
    <div
      className={`${styles.chip} ${selected ? styles.selected : ""}`}
      onClick={(event) => {
        event.stopPropagation();
        addOption(option);
      }}
    >
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

export default Chip;
