import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./ProgramsOffered.module.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  EffectFlip,
  Navigation,
  Pagination,
} from "swiper/modules";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  edit?: () => void;
}

const ProgramsOffered: FC<Props> = ({ edit }) => {
  const ref = useRef<any>();
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const swiperInst = ref.current.swiper;

    if (swiperInst) {
      swiperInst.on("slideChange", () => {
        setCurrentSlide(ref.current.swiper.realIndex);
      });
    }
  }, []);

  console.log(currentSlide);

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h3>Programs Offered</h3>
        {edit && (
          <button onClick={edit}>
            <img src={`${IMAGE_URL}/coach-portal/edit.svg`} alt="" />
            <span>Edit</span>
          </button>
        )}
      </div>
      <div className={styles.swiperContainer}>
        <div
          className={`${styles.buttonContainer} ${styles.prevBtn} ${
            currentSlide <= 0 ? styles.disabledBtn : null
          }`}
        >
          <button className="prev" disabled={currentSlide <= 0 ? true : false}>
            <img
              src={`${IMAGE_URL}/coach-portal/carousel-arrow-left.svg`}
              alt=""
            />
          </button>
        </div>

        <Swiper
          ref={ref}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={1}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={styles.swiper}
          // loop={true}
          pagination={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          rewind={true}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.coachProgram}>
              <img src={`${IMAGE_URL}/coach-portal/program-2.png`} />
              <div className={styles.topButtonContainer}>
                <button className={styles.learnMoreBtn}>Learn More</button>
                <button className={styles.signUpBtn}>Sign Up</button>
              </div>
              <div className={styles.bottomButtonContainer}>
                <button>Request a Proposal</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.coachProgram}>
              <img src={`${IMAGE_URL}/coach-portal/program-1.png`} />
              <div className={styles.topButtonContainer}>
                <button className={styles.learnMoreBtn}>Learn More</button>
                <button className={styles.signUpBtn}>Sign Up</button>
              </div>
              <div className={styles.bottomButtonContainer}>
                <button>Request a Proposal</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.coachProgram}>
              <img src={`${IMAGE_URL}/coach-portal/program-3.png`} />
              <div className={styles.topButtonContainer}>
                <button className={styles.learnMoreBtn}>Learn More</button>
                <button className={styles.signUpBtn}>Sign Up</button>
              </div>
              <div className={styles.bottomButtonContainer}>
                <button>Request a Proposal</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.coachProgram}>
              <img src={`${IMAGE_URL}/coach-portal/program-3.png`} />
              <div className={styles.topButtonContainer}>
                <button className={styles.learnMoreBtn}>Learn More</button>
                <button className={styles.signUpBtn}>Sign Up</button>
              </div>
              <div className={styles.bottomButtonContainer}>
                <button>Request a Proposal</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.coachProgram}>
              <img src={`${IMAGE_URL}/coach-portal/program-3.png`} />
              <div className={styles.topButtonContainer}>
                <button className={styles.learnMoreBtn}>Learn More</button>
                <button className={styles.signUpBtn}>Sign Up</button>
              </div>
              <div className={styles.bottomButtonContainer}>
                <button>Request a Proposal</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div
          className={`${styles.buttonContainer} ${styles.nextBtn} ${
            currentSlide >= 4 ? styles.disabledBtn : null
          }`}
        >
          <button className="next" disabled={currentSlide >= 4 ? true : false}>
            <img
              src={`${IMAGE_URL}/coach-portal/carousel-arrow-right.svg`}
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramsOffered;
