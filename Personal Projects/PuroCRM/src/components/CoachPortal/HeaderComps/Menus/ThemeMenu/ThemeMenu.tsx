"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ThemeMenu.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  selected: string;
  setSelected: (value: string) => void;
}

const ThemeMenu: FC<Props> = ({ show, setShow, selected, setSelected }) => {
  const menuRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (!show) return;

    if (firstTime && show) {
      setFirstTime(false);
      console.log("test");

      return;
    }
    console.log("hitting");

    function handleClick(event: any) {
      console.log("out");

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !firstTime
      ) {
        console.log("in");

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
      onClick={(e) => {
        // e.stopPropagation();
      }}
      ref={menuRef}
    >
      <div className={styles.menu}>
        <ul>
          {/* based on the selection either one of the option will be highlighted */}
          <li>
            {selected === "light" ? (
              <div className={styles.selected}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/light-mode.png"
                      alt=""
                      className={styles.light}
                    />
                  </div>
                  <p>Light Mode</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                className={styles.unSelected}
                onClick={() => setSelected("light")}
              >
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/light-mode.png"
                      alt=""
                      className={styles.light}
                    />
                  </div>
                  <p>Light Mode</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "dark" ? (
              <div className={styles.selected}>
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dark-mode.png"
                      alt=""
                      className={styles.dark}
                    />
                  </div>
                  <p>Dark Mode</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                className={styles.unSelected}
                onClick={() => setSelected("dark")}
              >
                <div className={styles.left}>
                  <div className={styles.imgContainer}>
                    <img
                      src="https://purocoach-crm-assets.s3.amazonaws.com/icons/dark-mode.png"
                      alt=""
                      className={styles.dark}
                    />
                  </div>
                  <p>Dark Mode</p>
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
      {/* <div className={styles.openArrow}>
        <img src="https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-up-single.png" alt="" />
      </div> */}
    </div>
  );
};

export default ThemeMenu;
