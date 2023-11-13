"use client";

import React, { FC } from "react";
import styles from "./Reviews.module.css";
import {
  Avatar,
  LinearProgress,
  Rating,
  Slider,
  linearProgressClasses,
  styled,
} from "@mui/material";

interface Props {
  selectedOptions: any[];
}

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EEEEEE",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FFC531",
  },
}));

const reviews = [
  {
    name: "Craig Korsgaard",
    rating: 4,
    // timstamp: new Date(),
    review:
      "Pretium vulputate sapien nec sagittis. Accumsan tortor posuere ac ut. Pellentesque adipiscing commodo elit at imperdiet dui. Lacus laoreet non curabitur gravida. Faucibus purus in massa tempor nec feugiat. Pellentesque elit ullamcorper dignissim cras ",
  },
  {
    name: "Justin Torff",
    rating: 3,
    // timstamp: new Date(),
    review:
      "Pretium vulputate sapien nec sagittis. Accumsan tortor posuere ac ut. Pellentesque adipiscing commodo elit at imperdiet dui. Lacus laoreet non curabitur gravida. Faucibus purus in massa tempor nec feugiat. Pellentesque elit ullamcorper dignissim cras ",
  },
];

const Reviews: FC<Props> = ({ selectedOptions }) => {
  return (
    <div className={styles.container}>
      <h3>Reviews</h3>
      <div className={styles.rating}>
        <div className={styles.ratingContainer}>
          <div className={styles.ratingContainerLeft}>
            <div>
              <p>4.7</p>
            </div>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
              size="medium"
            />
          </div>
          <div className={styles.ratingContainerRight}>
            <div className={styles.reviewSlider}>
              <p>5</p>
              <BorderLinearProgress variant="determinate" value={75} />
              <h5>65.66%</h5>
            </div>
            <div className={styles.reviewSlider}>
              <p>4</p>
              <BorderLinearProgress variant="determinate" value={35} />
              <h5>35.25%</h5>
            </div>
            <div className={styles.reviewSlider}>
              <p>3</p>
              <BorderLinearProgress variant="determinate" value={3} />
              <h5>12.04%</h5>
            </div>
            <div className={styles.reviewSlider}>
              <p>2</p>
              <BorderLinearProgress variant="determinate" value={2} />
              <h5>7.21%</h5>
            </div>
            <div className={styles.reviewSlider}>
              <p>1</p>
              <BorderLinearProgress variant="determinate" value={1} />
              <h5>3.45%</h5>
            </div>
          </div>
        </div>

        <div className={styles.splitter}></div>

        <div className={styles.reviewsContainer}>
          <h3>All Reviews (127)</h3>
          <div className={styles.reviews}>
            {reviews.map((item, index) => {
              return (
                <div className={styles.review} key={index}>
                  <div>
                    <Avatar />
                  </div>
                  <div className={styles.reviewRight}>
                    <h3>{item.name}</h3>
                    <div>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                      <p>2023-10-20T13:26:40.861Z</p>
                    </div>
                    <p>{item.review}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.buttonContainer}>
            <button>More Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
