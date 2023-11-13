import React, { FC } from "react";
import styles from "./FlowContainer.module.css";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  img: string;
  title: string;
  link: string;
  content: string;
  duration: string;
}

const FlowContainer: FC<Props> = ({ img, title, link, content, duration }) => {
  return (
    <div className={styles.flow}>
      <div className={styles.container}>
        <h4>{title}</h4>
        <p>{content}</p>
        <Link href={link}>
          <p className={styles.link}>Click here to start</p>
        </Link>
        <img
          className={styles.defaultImg}
          src={`${IMAGE_URL}/coach-portal/onboard-flow-1-blue.svg`}
          alt=""
        />
        <img
          className={styles.hoveredImg}
          src={`${IMAGE_URL}/coach-portal/onboard-flow-1-gray-2.svg`}
          alt=""
        />
      </div>

      <p className={styles.duration}>Duration: {duration}</p>
    </div>
  );
};

export default FlowContainer;
