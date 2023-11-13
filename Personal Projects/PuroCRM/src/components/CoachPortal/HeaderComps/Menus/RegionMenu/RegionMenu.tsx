"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./RegionMenu.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  selected: string;
  setSelected: (value: string) => void;
}

const RegionMenu: FC<Props> = ({ show, setShow, selected, setSelected }) => {
  const menuRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const [firstTime, setFirstTime] = useState(true);

  //handles the click on the screen and closes the menu if it's open
  useEffect(() => {
    if (!show) return;

    if (firstTime && show) {
      setFirstTime(false);

      return;
    }

    function handleClick(event: any) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !firstTime
      ) {
        if (show) {
          setShow(false);
          setFirstTime(true);
        }
      }
    }

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [show, firstTime]);

  return (
    <div
      className={`${show ? styles.showMenu : styles.hideMenu} ${
        styles.container
      }`}
      ref={menuRef}
    >
      <div className={styles.menu}>
        <ul>
          {/* based on the selection either one of the option will be highlighted */}
          <li>
            {selected === "us" ? (
              <div className={styles.selected}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>U.S Region</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                className={styles.unSelected}
                onClick={() => setSelected("us")}
              >
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>U.S Region</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "latin" ? (
              <div className={styles.selected}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>Latin America</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                className={styles.unSelected}
                onClick={() => setSelected("latin")}
              >
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>Latin America</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "asia" ? (
              <div className={styles.selected}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>Asian Region</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                className={styles.unSelected}
                onClick={() => setSelected("asia")}
              >
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>Asian Region</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "europe" ? (
              <div className={styles.selected}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>Europe Region</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                className={styles.unSelected}
                onClick={() => setSelected("europe")}
              >
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/region.png"
                      alt=""
                      className={styles.region}
                    />
                  </div>
                  <p>Europe Region</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegionMenu;
