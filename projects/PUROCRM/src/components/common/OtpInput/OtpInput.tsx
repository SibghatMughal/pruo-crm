import React, { FC } from "react";
import styles from "./OtpInput.module.css";

interface Props {
  value: string;
  onChange(value: string): void;
  size?: number;
}

const OtpInput: FC<Props> = ({ size, value, onChange }) => {
  let validationPattern = /[0-9]{1}/;
  const arr = new Array(size).fill("-");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const elem = e.target;
    const val = e.target.value;

    if (!validationPattern.test(val) && val !== "") return;

    const valueArr = value.split("");
    console.log(valueArr);

    valueArr[index] = val;
    const newVal = valueArr.join("").slice(0, 6);

    onChange(newVal);

    if (value && newVal.length > value.length) {
      const next = elem.nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const current = e.currentTarget;
    if (e.key === "ArrowLeft" || e.key === "Backspace") {
      const prev = current.previousElementSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }

    if (e.key === "ArrowRight") {
      const prev = current.nextSibling as HTMLInputElement | null;
      prev?.focus();
      prev?.setSelectionRange(0, 1);
      return;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const val = e.clipboardData.getData("text").substring(0, size);
    onChange(val);
  };

  return (
    <div className={styles.container}>
      {arr.map((_, index) => (
        <input
          key={index}
          type="text"
          value={value.at(index) ?? ""}
          pattern={validationPattern.source}
          inputMode="numeric"
          autoComplete="one-time-code"
          onChange={(event) => handleInputChange(event, index)}
          onKeyUp={handleKeyUp}
          onPaste={handlePaste}
          autoFocus={index === 0}
        />
      ))}
    </div>
  );
};

export default OtpInput;
