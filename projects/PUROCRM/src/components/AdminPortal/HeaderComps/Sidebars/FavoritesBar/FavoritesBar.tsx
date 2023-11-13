import React, { FC } from "react";
import { Drawer } from "@mui/material";
import styles from "./FavoritesBar.module.css";
import Rating from "@mui/material/Rating";
import { AdminEmailItem } from "@/components";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const FavoritesBar: FC<Props> = ({ open, setOpen }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      className={styles.favoritesBar}
    >
      <div className={styles.container}>
        <h2>Favorites</h2>
        <div className={styles.favoritesContainer}>
          <div className={styles.favoritesItem}>
            <h3>Coaches</h3>
            <div className={styles.coachesTableContainer}>
              <table className={styles.coachesTable}>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Experience</th>
                    <th>Rating</th>
                    <th>View Profile</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
                        alt=""
                      />
                    </td>
                    <td className={styles.coachName}>
                      <span>Mary Adams</span>
                      <br />
                      <small className={styles.coachTitle}>
                        Executive Coach
                      </small>
                    </td>
                    <td>12 years</td>
                    <td>
                      <span>Top Rated</span>
                      <div className={styles.rating}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={4.5}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                        <div>
                          <p>4.7</p>
                          <span>(127)</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button>View Profile</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
                        alt=""
                      />
                    </td>
                    <td className={styles.coachName}>
                      <span>Kiera Miles</span>
                      <br />
                      <small className={styles.coachTitle}>
                        Business Coach
                      </small>
                    </td>
                    <td>6 years</td>
                    <td>
                      <span>Top Rated</span>
                      <div className={styles.rating}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={2.5}
                          precision={0.5}
                          readOnly
                          size="small"
                        />
                      </div>
                    </td>
                    <td>
                      <button>View Profile</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.favoritesItem}>
            <h3>Contact Lists</h3>
            <div className={styles.contactsTableContainer}>
              <table className={styles.contactsTable}>
                <thead>
                  <tr>
                    <th>
                      <div>Name</div>
                    </th>
                    <th>
                      <div>Date Created</div>
                    </th>
                    <th>Contacts</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Marketing</td>
                    <td>09/06/2023</td>
                    <td>150</td>
                    <td>
                      <p className={styles.details}>View Details</p>
                    </td>
                  </tr>
                  <tr>
                    <td>VIP Client</td>
                    <td>09/06/2023</td>
                    <td>225</td>
                    <td>
                      <p className={styles.details}>View Details</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.favoritesItem}>
            <h3>Emails</h3>
            <div className={styles.emailItemContainer}>
              <div className={styles.emailTopContainer}>
                <h4 className={styles.emailFrom}>From:</h4>
                <h4 className={styles.emailDate}>Date:</h4>
              </div>
              <div className={styles.emailItems}>
                <AdminEmailItem
                  opened={true}
                  profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
                  name="John Dunbar"
                  lastMsg="Hey Johnny, Let me know when you're readdy to discuss the new plan for the nest quater"
                  timestamp="2 weeks"
                  subject="Propostion Request"
                />
                <hr className={styles.divider} />
                <AdminEmailItem
                  opened={false}
                  profileImg="https://purocoach-crm-assets.s3.amazonaws.com/notification-email-photo.jpeg"
                  name="Lisa Ericson"
                  lastMsg="Your application has been approved. Please login into your portal to review"
                  timestamp="Yesterday"
                  subject="Propostion Request"
                />
              </div>
            </div>
          </div>

          <div className={styles.favoritesItem}>
            <h3>Links</h3>
            <div className={styles.linkItemContainer}>
              <div className={styles.linkItem}>
                <p>Addresss Box</p>
                <div>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/popout.png"
                    alt=""
                  />
                </div>
              </div>
              <div className={`${styles.linkItem} ${styles.lastItem}`}>
                <p>Contact Data</p>
                <div>
                  <img
                    src="https://purocoach-crm-assets.s3.amazonaws.com/icons/popout.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.favoritesItem}>
          <h3>Documents</h3>
          <div className={styles.linkItemContainer}>
            <div className={styles.linkItem}>
              <p>Coaching Models</p>
              <div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/documents.png"
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.linkItem} ${styles.lastItem}`}>
              <p>Google Docs</p>
              <div>
                <img
                  src="https://purocoach-crm-assets.s3.amazonaws.com/icons/documents.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default FavoritesBar;
