"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./StatusMenu.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  selected: string;
  setSelected: (value: string) => void;
}

const StatusMenu: FC<Props> = ({ show, setShow, selected, setSelected }) => {
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
            {selected === "online" ? (
              <div className={styles.selected}>
                <div className={styles.statusText}>
                  <div className={styles.onlineCircle}></div>
                  <p>Online</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("online")}
                className={styles.unSelected}
              >
                <div className={styles.statusText}>
                  <div className={styles.onlineCircle}></div>
                  <p>Set as Online</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "meeting" ? (
              <div className={styles.selected}>
                <div className={styles.statusText}>
                  <div className={styles.meetingCircle}></div>
                  <p>In a Meeting</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("meeting")}
                className={styles.unSelected}
              >
                <div className={styles.statusText}>
                  <div className={styles.meetingCircle}></div>
                  <p>Set as In a Meeting</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "away" ? (
              <div className={styles.selected}>
                <div className={styles.statusText}>
                  <div className={styles.awayCircle}></div>
                  <p>Away</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("away")}
                className={styles.unSelected}
              >
                <div className={styles.statusText}>
                  <div className={styles.awayCircle}></div>
                  <p>Set as Away</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "busy" ? (
              <div className={styles.selected}>
                <div className={styles.statusText}>
                  <div className={styles.busyCircle}></div>
                  <p>Busy</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("busy")}
                className={styles.unSelected}
              >
                <div className={styles.statusText}>
                  <div className={styles.busyCircle}></div>
                  <p>Set as Busy</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "offline" ? (
              <div className={styles.selected}>
                <div className={styles.statusText}>
                  <div className={styles.offlineCircle}></div>
                  <p>Offline</p>
                </div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("offline")}
                className={styles.unSelected}
              >
                <div className={styles.statusText}>
                  <div className={styles.offlineCircle}></div>
                  <p>Set as Offline</p>
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

export default StatusMenu;
