"use client";

import React, {
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./FilterMenu.module.css";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#304880",
    "&.hover": {
      backgroundColor: alpha("#304880", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#304880",
  },
  "& .MuiSwitch-track": {
    backgroundColor: "#c0c0c0",
  },
}));

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
}

const FilterMenu: FC<Props> = ({ show, setShow }) => {
  //to know whether the menu option is opened or not
  const menuRef = useRef(null) as MutableRefObject<HTMLInputElement | null>;

  const [firstTime, setFirstTime] = useState(true);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

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

  //the below four functions is used to toggle filter option

  const openOption1 = () => {
    setOption1((curr) => !curr);
    setOption2(false);
    setOption3(false);
    setOption4(false);
  };

  const openOption2 = () => {
    setOption1(false);
    setOption2((curr) => !curr);
    setOption3(false);
    setOption4(false);
  };

  const openOption3 = () => {
    setOption1(false);
    setOption2(false);
    setOption3((curr) => !curr);
    setOption4(false);
  };

  const openOption4 = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4((curr) => !curr);
  };

  return (
    <div
      className={`${show ? styles.showMenu : styles.hideMenu} ${
        styles.container
      }`}
      ref={menuRef}
    >
      <div className={styles.menu}>
        <div className={styles.recentSearches}>
          <div className={styles.recentSearchesTitle}>
            <h3>Recent Searches</h3>
            <p>Clear</p>
          </div>
          <div className={styles.recentSearchesContainer}>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/clock-2.png"
                alt=""
              />
              <p>seo coach</p>
            </div>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/clock-2.png"
                alt=""
              />
              <p>business coach</p>
            </div>
            <div>
              <img
                src="https://purocoach-crm-assets.s3.amazonaws.com/icons/clock-2.png"
                alt=""
              />
              <p>Life coach</p>
            </div>
          </div>
        </div>
        <div className={styles.filtersContainer}>
          <div>
            <h3>Filter Options</h3>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.optionItem}>
              <p>All</p>
              <div className={styles.filterContainer}>
                <div className={styles.filterPicker} onClick={openOption1}>
                  <div></div>
                  <img
                    src={
                      option1
                        ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                        : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                    }
                    alt=""
                    className={option1 ? styles.upArrow : styles.downArrow}
                  />
                </div>
              </div>
            </div>
            <div className={styles.optionItem}>
              <p>Coaches</p>
              <div className={styles.filterContainer}>
                <div className={styles.filterPicker} onClick={openOption2}>
                  <div></div>
                  <img
                    src={
                      option2
                        ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                        : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                    }
                    alt=""
                    className={option2 ? styles.upArrow : styles.downArrow}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.optionsContainer}>
            <div className={styles.optionItem}>
              <p>Users</p>
              <div className={styles.filterContainer}>
                <div className={styles.filterPicker} onClick={openOption3}>
                  <div></div>
                  <img
                    src={
                      option3
                        ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                        : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                    }
                    alt=""
                    className={option3 ? styles.upArrow : styles.downArrow}
                  />
                </div>
              </div>
            </div>
            <div className={styles.optionItem}>
              <p>Knowledge Base</p>
              <div className={styles.filterContainer}>
                <div className={styles.filterPicker} onClick={openOption4}>
                  <div></div>
                  <img
                    src={
                      option4
                        ? "https://purocoach-crm-assets.s3.amazonaws.com/client-registration/up-arrow-gray.png"
                        : "https://purocoach-crm-assets.s3.amazonaws.com/icons/arrow-down.png"
                    }
                    alt=""
                    className={option4 ? styles.upArrow : styles.downArrow}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.enabled}>
            <h3>Set as Default:</h3>
            <div className={styles.switchContainer}>
              <CustomSwitch />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.resetBtn}>Reset</button>
            <button className={styles.applyBtn}>Apply</button>
          </div>
        </div>
        <div className={styles.popular}>
          <div className={styles.popularTitle}>
            <h3>Popular Searches</h3>
          </div>
          <div className={styles.popularContainer}>
            <div className={styles.popularItem}>
              <p>Client Maketplace</p>
            </div>
            <div className={styles.popularItem}>
              <p>Coach Maketplace</p>
            </div>
            <div className={styles.popularItem}>
              <p>API Documentation</p>
            </div>
            <div className={styles.popularItem}>
              <p>User Guide</p>
            </div>
          </div>
        </div>
      </div>

      {option1 && (
        <div className={styles.filterOptions1}>
          <div className={styles.filterOption}>
            <p>Coaches</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Knowledge Base</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Users</p>
            <input type="checkbox" />
          </div>
        </div>
      )}

      {option2 && (
        <div className={styles.filterOptions2}>
          <div className={styles.filterOption}>
            <p>Top Rated</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Certified</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Non Certified</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Up Rasising</p>
            <input type="checkbox" />
          </div>
        </div>
      )}

      {option3 && (
        <div className={styles.filterOptions3}>
          <div className={styles.filterOption}>
            <p>Clients</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Coaches</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Contacts</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Leads</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Subscribers</p>
            <input type="checkbox" />
          </div>
        </div>
      )}

      {option4 && (
        <div className={styles.filterOptions4}>
          <div className={styles.filterOption}>
            <p>User Guide</p>
            <input type="checkbox" />
          </div>
          <div className={styles.filterOption}>
            <p>Api Docs</p>
            <input type="checkbox" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;
