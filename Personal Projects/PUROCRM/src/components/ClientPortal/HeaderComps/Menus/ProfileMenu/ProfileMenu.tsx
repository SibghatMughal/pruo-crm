"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ProfileMenu.module.css";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const ProfileMenu: FC<Props> = ({ show, setShow }) => {
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
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/profiles.png"
                alt=""
              />
            </div>
            <p>My Profiles</p>
          </li>
          <li>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/portals.png"
                alt=""
              />
            </div>
            <p>My Portals</p>
          </li>
          <li>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/settings.png"
                alt=""
              />
            </div>
            <p>Settings & Perferences</p>
          </li>
          <li>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/messaging.png"
                alt=""
              />
            </div>
            <p>Billings & Subscriptions</p>
          </li>
          <li>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/updates.png"
                alt=""
              />
            </div>
            <p>Product Updates</p>
          </li>
          <li>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/security.png"
                alt=""
              />
            </div>
            <p>Security</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
