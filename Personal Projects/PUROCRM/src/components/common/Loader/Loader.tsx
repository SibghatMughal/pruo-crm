import React, { FC } from "react";
import styles from "./Loader.module.css";

interface Props {
  size: number;
  color: string;
}

const Loader: FC<Props> = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundImage: `linear-gradient(${color} 50px, transparent 0),
        linear-gradient(${color} 50px, transparent 0),
        linear-gradient(${color} 50px, transparent 0),
        linear-gradient(${color} 50px, transparent 0),
        linear-gradient(${color} 50px, transparent 0),
        linear-gradient(${color} 50px, transparent 0)`,
      }}
      className={styles.loader}
    ></div>
  );
};

export default Loader;
