"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./UserMenu.module.css";
import { deleteCookies } from "@/utils/cookies";
import { removeUser } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  selected: string;
  setSelected: (value: string) => void;
}

const UserMenu: FC<Props> = ({ show, setShow, selected, setSelected }) => {
  const menuRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const user = useSelector((state: any) => state.userInfo.user);

  const [firstTime, setFirstTime] = useState(true);

  const dispatch = useDispatch();
  const router = useRouter();

  console.log(user);

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

  const logout = async () => {
    await deleteCookies("jwt");
    dispatch(removeUser({}));
    router.push("/login");
  };

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
            {selected === "admin" ? (
              <div className={styles.selected}>
                <p>Logged as Admin</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("admin")}
                className={styles.unSelected}
              >
                <p>Log as Admin</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "coach" ? (
              <div className={styles.selected}>
                <p>Logged as Coach</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("coach")}
                className={styles.unSelected}
              >
                <p>Log as Coach</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
          <li>
            {selected === "client" ? (
              <div className={styles.selected}>
                <p>Logged as Client</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/check-mark.png"
                  alt=""
                />
              </div>
            ) : (
              <div
                onClick={() => setSelected("client")}
                className={styles.unSelected}
              >
                <p>Log as Client</p>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/log-as.png"
                  alt=""
                />
              </div>
            )}
          </li>
        </ul>
        <div className={styles.logout} onClick={logout}>
          <p>Log as a different user</p>
        </div>
        <div className={styles.logout} onClick={logout}>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
