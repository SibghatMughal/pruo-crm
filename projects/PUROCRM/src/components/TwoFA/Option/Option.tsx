"use client";

import { FC } from "react";
import styles from "./Option.module.css";

interface Props {
  title: string;
  content: string;
  buttonTxt: string;
  selected: boolean;
  unSelected: boolean;
  setSelected: () => void;
}

const Option: FC<Props> = ({
  title,
  content,
  buttonTxt,
  selected,
  setSelected,
  unSelected,
}) => {
  return (
    <div
      className={`${styles.option} ${selected ? styles.option__selected : ""} ${
        unSelected ? styles.option__unSelected : ""
      }`}
    >
      <div className={styles.container}>
        <div className={styles.containerLeft}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
        <div className={styles.containerRight}>
          <button
            onClick={setSelected}
            className={` ${selected ? styles.button__selected : styles.button}`}
          >
            {buttonTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;
