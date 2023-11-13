"use client";

import React, { useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./CoachProfileInfo.module.css";
import { IMAGE_URL } from "@/constants/endpoints";
import { Rating } from "@mui/material";
import AboutMe from "@/components/CoachPortal/CoachProfile/Contents/AboutMe/AboutMe";
import {
  CaseStudies,
  FAQ,
  ProgramsOffered,
  Qualifications,
  Reviews,
  ServicesOffered,
  Testimonials,
} from "@/components/CoachPortal/CoachProfile/Contents";

let content = `
<p><span style="color: rgb(68, 68, 68);">I’m coach Kiera, a seasoned business executive master coach with 12 years of experience in coaching six to seven figure top CEOs who are serious about scaling their business among top performers in the nation to the next level. I’m also a passionate, yet dedicated coach who is proud in coaching and mentoring entrepreneurs and CEO’s.</span></p><p><br></p><p><span style="color: rgb(68, 68, 68);">I have helped over 1000 business owners scale using my proprietary process and Business Model. It is the only model focused specifically on scaling and encompasses your entire company including: Strategic Vision, Cash Flow, Alliance of your Team, Leadership and Execution.  dedicated to developing entrepreneurs, executives, and other high potential employees to gain self-awareness and develop their leadership, communication, and problem-solving skills. Request a personalized proposal to lean more of service, pricing and coaching.</span></p><p><br></p><p><span style="color: rgb(68, 68, 68);">My Clients often achieve the following:</span></p><ul><li><span style="color: rgb(68, 68, 68);"> Gain clarity on vision and goals</span></li><li><span style="color: rgb(68, 68, 68);"> Improve business growth &amp; speed of execution</span></li><li><span style="color: rgb(68, 68, 68);">Boost confidence in ability to achieve future goals &amp; targets</span></li><li><span style="color: rgb(68, 68, 68);">Enhanced leadership skills through coaching and mentorship</span></li></ul><p><br></p><p><span style="color: rgb(68, 68, 68);">When you hire me you get:</span></p><ul><li><span style="color: rgb(68, 68, 68);">Someone to hold them to account on execution</span></li><li><span style="color: rgb(68, 68, 68);">Proven senior leader, coach &amp; mentor</span></li><li><span style="color: rgb(68, 68, 68);">Productivity specialist &amp; mentor</span></li></ul><p><br></p><p><span style="color: rgb(68, 68, 68);">Areas of Expertise:</span></p><ul><li><span style="color: rgb(68, 68, 68);">Leadership / Executive Coach - helping leaders unlock their true potential (ICF Coach)</span></li><li><span style="color: rgb(68, 68, 68);">Business Mentor in Retail, Property, Startups &amp; Technology</span></li><li><span style="color: rgb(68, 68, 68);">Productivity Specialist - following the GTD Methods</span></li></ul><p><br></p><p><span style="color: rgb(68, 68, 68);">Career Highlights:</span></p><ul><li><span style="color: rgb(68, 68, 68);">Leader of Managed Services Organization for Global IT Services Business</span></li><li><span style="color: rgb(68, 68, 68);">General Manager - responsible for building and leading new areas of focus</span></li><li><span style="color: rgb(68, 68, 68);">Co-Founder of 3 UK Business in Property, Retail &amp; Consultancy</span></li><li><span style="color: rgb(68, 68, 68);">Raised over £300k in funding for Retail Business on Seedrs</span></li><li><span style="color: rgb(68, 68, 68);">Retail business has gone from £0 revenue to over £1m in the first 2 years</span></li><li><span style="color: rgb(68, 68, 68);">Clear knowledge of building Go To Market Plans/Strategy (GTM) and executing on the plans</span></li><li><span style="color: rgb(68, 68, 68);">Leadership Coach - trained at the Henley Business School</span></li><li><span style="color: rgb(68, 68, 68);">Virgin Startup Mentor | Henley Business School Mentor</span></li></ul><p><br></p><p><span style="color: rgb(68, 68, 68);">Niche backgrounds working in IT Services, Government, Startups, Travel, Retail, Consultancy &amp; Property.</span></p><p><br></p><p><span style="color: rgb(68, 68, 68);">In today’s complex and increasingly dynamic business environment, traditional education and professional training only gets you so far.</span></p>
`;

let qualifications = [
  { name: "ICF Certifications" },
  { name: "Master Certified Coach (MCC)" },
  { name: "EC GM - Business Strategy" },
];

let services = [
  {
    name: "Executive Coaching for Entrepreneurs",
    description: "Providing coaching for CEO's & Exutives",
    type: "Group",
  },
  {
    name: "Work Perfomance Coaching",
    description:
      "Providing coaching to corporate employees for best performance",
    type: "One-on-One",
  },
  {
    name: "Business Coaching for Start-ups",
    description: "Providing business coaching for startt-up companies",
    type: "Group",
  },
];

let programs = [
  {
    name: "My Business Coaching Program",
    description: "Providing coaching for CEO's & Exutives",
    type: "Group",
  },
  {
    name: "My Work Perfomance Coaching Program",
    description:
      "Providing coaching to corporate employees for best performance",
    type: "One-on-One",
  },
  {
    name: "My Business Coaching for Start-ups",
    description: "Providing business coaching for startt-up companies",
    type: "Group",
  },
];

let caseStudies = [
  { name: "Team Coaching - Case Study" },
  { name: "Executive Coaching - Case Study" },
];

let testimonials = [{ name: "Rochel Foose" }, { name: "Lauralee Quintero" }];

let faqs = [
  {
    question: "What qualifications should I look for in a health coach?",
    answer:
      "Look for a health coach who has obtained certification from a reputable coaching organization such as the International Coach Federation (ICF), National Board for Health & Wellness Coaching (NBHWC), or other recognized certifying bodies.",
  },
  {
    question: "What qualifications should I look for in a health coach?",
    answer:
      "Look for a health coach who has obtained certification from a reputable coaching organization such as the International Coach Federation (ICF), National Board for Health & Wellness Coaching (NBHWC), or other recognized certifying bodies.",
  },
];

const CoachProfileInfo = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <div>
      <div className={styles.container}>
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div
          className={`${
            openSidebar
              ? styles.right__container
              : styles.closedRight__container
          }`}
        >
          <Header title="Coach Portal" />

          <div className={styles.coachProfileHeader}>
            <div className={styles.coachProfileContainer}>
              <div className={styles.coachProfileLeftContainer}>
                <div className={styles.leftContainer}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/profile-info.svg`}
                    alt=""
                  />
                </div>
                <div className={styles.centerContainer}>
                  <div className={styles.centerNameContainer}>
                    <h2>Kiera Botosh</h2>
                    <img
                      src={`${IMAGE_URL}/coach-portal/verified.svg`}
                      alt=""
                    />
                    <p>Not yet verified</p>
                  </div>
                  <h4>Executive Business Coach</h4>
                  <p>12 Years of Experience</p>

                  <div>
                    <div className={styles.centerContentContainer}>
                      <p>Credentials:</p>
                      <h4>Author</h4>
                    </div>
                    <div className={styles.centerContentContainer}>
                      <p>Category:</p>
                      <h4>Business Executive Coaching</h4>
                    </div>
                    <div className={styles.centerContentContainer}>
                      <p>Focus:</p>
                      <h4>Business Startup</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.coachProfileRightContainer}>
                <div className={styles.rightTopContainer}>
                  <div className={styles.ratedContainer}>
                    <img
                      src={`${IMAGE_URL}/coach-portal/top-rated.svg`}
                      alt=""
                    />
                    <p>Not yet rated</p>
                    <img src={`${IMAGE_URL}/coach-portal/info.svg`} alt="" />
                  </div>
                  <div className={styles.successContainer}>
                    <span>0%</span>
                    <p>Success Score</p>
                    <img src={`${IMAGE_URL}/coach-portal/info.svg`} alt="" />
                  </div>
                </div>
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
                    <span>
                      (<span>127</span>)
                    </span>
                  </div>
                </div>
                <div>
                  <div className={styles.rightContentContainer}>
                    <div>
                      <img
                        src={`${IMAGE_URL}/coach-portal/sessions.svg`}
                        alt=""
                      />
                      <p>Sessions</p>
                    </div>
                    <h4>Author</h4>
                  </div>
                  <div className={styles.rightContentContainer}>
                    <div>
                      <img
                        src={`${IMAGE_URL}/coach-portal/country.svg`}
                        alt=""
                      />
                      <p>New York, USA</p>
                    </div>
                    <h4>11:30PM Local Time</h4>
                  </div>
                  <div className={styles.rightContentContainer}>
                    <div>
                      <img
                        src={`${IMAGE_URL}/coach-portal/payment.svg`}
                        alt=""
                      />
                      <p>Payment</p>
                    </div>
                    <h4>Credit/Debit Cards</h4>
                  </div>
                  <div className={styles.rightContentContainer}>
                    <div>
                      <img
                        src={`${IMAGE_URL}/coach-portal/payment-plan.svg`}
                        alt=""
                      />
                      <p>Payment plan</p>
                    </div>
                    <h4>Yes</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.coachProfile}>
            <div className={styles.contentLeft}>
              <AboutMe content={content} />
              <ServicesOffered services={services} />
              <ProgramsOffered />
              <Qualifications
                selectedOptions={qualifications}
                viewMode={true}
              />
              <CaseStudies selectedOptions={caseStudies} viewMode={true} />
              <Testimonials selectedOptions={testimonials} viewMode={true} />
              <Reviews selectedOptions={testimonials} />
              <FAQ faqs={faqs} viewMode={true} />
            </div>

            <div className={styles.contentRight}>
              <div className={styles.contentRightTop}>
                <div className={styles.optionItem}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/total-earning.svg`}
                    alt=""
                  />
                  <h2>$50K+</h2>
                  <p>Total Earning</p>
                </div>
                <div className={styles.optionItem}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/total-jobs.svg`}
                    alt=""
                  />
                  <h2>29</h2>
                  <p>Total Jobs</p>
                </div>
                <div className={styles.optionItem}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/total-hours.svg`}
                    alt=""
                  />
                  <h2>1,205</h2>
                  <p>Total Hours</p>
                </div>
              </div>
              <div className={styles.contentRightBottom}>
                <div className={styles.optionItem}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/group-coaching.svg`}
                    alt=""
                  />
                  <h2>$50K+</h2>
                  <p>Group Coaching</p>
                </div>
                <div className={styles.optionItem}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/group-coaching.svg`}
                    alt=""
                  />
                  <h2>1,205</h2>
                  <p>One-on-One Coaching</p>
                </div>
              </div>

              <div className={styles.languagesContainer}>
                <h3>Languages:</h3>
                <p>
                  <span>English</span> - Native
                </p>
                <p>
                  <span>German</span> - Fluent
                </p>
              </div>

              <div className={styles.verification}>
                <h3>ID Verification</h3>
                <div>
                  <p>Verified</p>
                  <img src={`${IMAGE_URL}/coach-portal/verified.svg`} alt="" />
                </div>
              </div>

              <div className={styles.verification}>
                <h3>Payment Verification</h3>
                <div>
                  <p>Verified</p>
                  <img src={`${IMAGE_URL}/coach-portal/verified.svg`} alt="" />
                </div>
              </div>

              <div className={styles.company}>
                <h3>Company Associated With</h3>
                <div className={styles.companyContainer}>
                  <img src={`${IMAGE_URL}/coach-portal/company.svg`} alt="" />
                  <div className={styles.reviewContainer}>
                    <h4>The Coaching Group LLC</h4>
                    <div>
                      <p>Google Reviews - </p>
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.intro}>
                <h3>Coach Introduction</h3>
                <img src={`${IMAGE_URL}/coach-portal/intro-video.svg`} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfileInfo;
