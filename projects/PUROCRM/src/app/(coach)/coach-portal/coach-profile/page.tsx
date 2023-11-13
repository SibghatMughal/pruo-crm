"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/CoachPortal/Sidebar/Sidebar";
import Header from "@/components/CoachPortal/Header/Header";
import styles from "./CoachProfile.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import {
  CoachCreateProfileModal1,
  CoachCreateProfileModal10,
  CoachCreateProfileModal11,
  CoachCreateProfileModal12,
  CoachCreateProfileModal13,
  CoachCreateProfileModal2,
  CoachCreateProfileModal3,
  CoachCreateProfileModal4,
  CoachCreateProfileModal5,
  CoachCreateProfileModal6,
  CoachCreateProfileModal7,
  CoachCreateProfileModal8,
  CoachCreateProfileModal9,
  CoachUplaodSuccessModal,
  CoachProfileInfoModal,
  CoachAddAboutMeModal,
  CoachCreateProfileModal17,
  CoachCreateProfileModal18,
  CoachCreateProfileModal19,
  DeleteCertificateModal,
  CoachCreateProfileModal20,
  CoachCreateProfileModal21,
  CoachCreateProfileModal22,
  CoachCreateProfileModal23,
  CoachCreateProfileModal24,
  CoachCreateProfileModal25,
  CoachCreateProfileModal26,
  CoachCreateProfileModal27,
  CoachCreateProfileModal28,
  CoachCreateProfileModal29,
  CoachCreateProfileModal30,
  CoachCreateProfileModal31,
  CoachCreateProfileModal32,
  CoachCreateProfileModal33,
  CoachCreateProfileModal4_1,
  CoachCreateProfileModal7_1,
  SaveSuccessModal,
} from "@/components/CoachPortal/CoachProfile";
import { IMAGE_URL } from "@/constants/endpoints";
import { Rating } from "@mui/material";
import CertificationsReviewModal from "@/components/CoachPortal/CoachProfile/CertificationsReviewModal/CertificationsReviewModal";
import AboutMe from "@/components/CoachPortal/CoachProfile/Contents/AboutMe/AboutMe";
import {
  CaseStudies,
  Qualifications,
  ServicesOffered,
  Testimonials,
  Reviews,
  FAQ,
  BusinessInfo,
  Programs,
  ProgramsOffered,
  OtherInfo,
} from "@/components/CoachPortal/CoachProfile/Contents";
import axios from "axios";
import { getCoachingCategories } from "@/services/coaching-categories";
import Link from "next/link";
import {
  EditCaseStudyModal,
  EditCertificateModal,
  EditIntroVideo,
} from "@/components/CoachPortal/CoachProfile/ContentEditModals";
import { OnboardingTable } from "@/components/CoachPortal/Onboarding";

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
  {
    name: "Team Coaching - Case Study",
    description:
      "Andrew, a remarkably successful President for Asia-Pacific of a well-known multinational company, a celebrated ‘media-darling’ with a stellar career, told me he was wishing to ‘reconnect’ with his family. For a couple of decades, he had let the demands of the job shrink his time with his wife and children down to a minimum, with the belief that he was doing a great job at securing a financially good future for his family. His incessant traveling around the world had taken such a toll on his health over the years that he was spending a lot of the weekends just catching up with sleep.",
  },
  {
    name: "Executive Coaching - Case Study",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
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

let staticSelectedLanguages = [
  {
    id: 1,
    name: "French",
    fluency: "Bilingual",
  },
  {
    id: 2,
    name: "Spanish",
    fluency: "Beginner",
  },
  {
    id: 3,
    name: "",
    fluency: "Native",
  },
];

const CoachProfile = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  const searchParams = useSearchParams();
  const router = useRouter();

  const defaultOpen = searchParams.get("defaultOpen");

  // const [openModal1, setOpenModal1] = useState(false);
  const [openModal1, setOpenModal1] = useState(Boolean(defaultOpen));
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal4_1, setOpenModal4_1] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal7_1, setOpenModal7_1] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);
  const [openModal11, setOpenModal11] = useState(false);
  const [openModal12, setOpenModal12] = useState(false);
  const [openModal13, setOpenModal13] = useState(false);
  const [openModal14, setOpenModal14] = useState(false);
  const [openModal15, setOpenModal15] = useState(false);
  const [openModal16, setOpenModal16] = useState(false);
  const [openModal17, setOpenModal17] = useState(false);
  const [openModal18, setOpenModal18] = useState(false);
  const [openModal19, setOpenModal19] = useState(false);
  const [openCertificationsList, setOpenCertificationsList] = useState(false);
  const [openDeleteCertificate, setOpenDeleteCertificate] = useState(false);
  const [openModal20, setOpenModal20] = useState(false);
  const [openModal21, setOpenModal21] = useState(false);
  const [openModal22, setOpenModal22] = useState(false);
  const [openModal23, setOpenModal23] = useState(false);
  const [openModal24, setOpenModal24] = useState(false);
  const [openModal25, setOpenModal25] = useState(false);
  const [openModal26, setOpenModal26] = useState(false);
  //for opening same modal 26 after adding few testimonials
  const [openModal26One, setOpenModal26One] = useState(false);
  const [openModal27, setOpenModal27] = useState(false);
  const [openModal28, setOpenModal28] = useState(false);
  const [openModal29, setOpenModal29] = useState(false);
  const [openModal30, setOpenModal30] = useState(false);
  const [openModal31, setOpenModal31] = useState(false);
  const [openModal32, setOpenModal32] = useState(false);
  const [openModal33, setOpenModal33] = useState(false);
  const [openModal34, setOpenModal34] = useState(false);

  const [finishedSetup, setFinishedSetup] = useState(false);

  const [openDeleteTestimonial, setOpenDeleteTestimonial] = useState(false);

  const [selectedImg, setSelectedImg] = useState("");
  const [selectedCertificateOptions, setSelectedCertificateOptions] = useState<
    any[]
  >([]);

  const [selectedLanguages, setSelectedLanguages] = useState<any[]>([
    { id: 1, name: "English", fluency: "Native" },
  ]);

  useEffect(() => {
    if (!defaultOpen) {
      setFinishedSetup(true);
    }
  }, [defaultOpen]);

  const getData = async () => {
    try {
      const response = await getCoachingCategories();

      console.log(response);

      const data = await axios.get(
        "https://api-dev.purocoach.com/api/coaching-categories"
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  //docs state
  const [reviewDoc, setReviewDoc] = useState();
  const [docs, setDocs] = useState<any[]>([]);
  const [currentDoc, setCurrentDoc] = useState(0);

  const [doc, setDoc] = useState<any>(null);
  const [docName, setDocName] = useState<string>("");

  //case studies
  const [numberOfCases, setNumberOfCases] = useState(0);

  //header selector
  const [headerSelected, setHeaderSelected] = useState("about");

  const [editOn, setEditOn] = useState(false);

  const [openEditCerCertificateModal, setOpenEditCerCertificateModal] =
    useState(false);

  const [openEditCaseStudyModal, setOpenEditCaseStudyModal] = useState(false);
  const [openEditIntroVideoModal, setOpenEditIntroVideoModal] = useState(false);

  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleSelectedImg = (e: any) => {
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedImg(objectUrl);
  };

  const deleteDoc = () => {
    setDocs((currDocs) => {
      return currDocs.filter(
        (doc) => doc.name !== selectedCertificateOptions[currentDoc].name
      );
    });
    setDoc(null);
  };

  const closeModal = () => {
    router.push("/coach-workspace/onboarding");
  };

  const moveStep1 = () => {
    setOpenModal1(true);
    setOpenModal2(false);
  };

  const moveStep2 = () => {
    setOpenModal1(false);
    setOpenModal2(true);
    setOpenModal3(false);
  };

  const moveStep3 = () => {
    setOpenModal2(false);
    setOpenModal3(true);
    setOpenModal4(false);
  };

  const moveStep4 = () => {
    setOpenModal3(false);
    setOpenModal4(true);
    setOpenModal5(false);
  };

  const moveStep4_1 = () => {
    setOpenModal4(false);
    setOpenModal4_1(true);
    setOpenModal5(false);
  };

  const moveStep5 = () => {
    setOpenModal4_1(false);
    setOpenModal5(true);
    setOpenModal6(false);
  };

  const moveStep6 = () => {
    setOpenModal5(false);
    setOpenModal6(true);
    setOpenModal7(false);
  };

  const moveStep7 = () => {
    setOpenModal6(false);
    setOpenModal7(true);
    setOpenModal8(false);
  };

  const moveStep7_1 = () => {
    setOpenModal7(false);
    setOpenModal7_1(true);
    setOpenModal8(false);
  };

  const moveStep8 = () => {
    setOpenModal7_1(false);
    setOpenModal8(true);
    setOpenModal9(false);
  };

  const moveStep9 = () => {
    setOpenModal8(false);
    setOpenModal9(true);
    setOpenModal10(false);
  };

  const moveStep10 = () => {
    setOpenModal9(false);
    setOpenModal10(true);
    setOpenModal11(false);
  };

  const moveStep11 = () => {
    setOpenModal10(false);
    setOpenModal11(true);
    setOpenModal12(false);
  };

  const moveStep12 = () => {
    setOpenModal11(false);
    setOpenModal12(true);
    setOpenModal13(false);
  };

  const moveStep13 = () => {
    setOpenModal12(false);
    setOpenModal13(true);
    setOpenModal14(false);
  };

  const moveStep14 = () => {
    setOpenModal13(false);
    setOpenModal14(true);
    setOpenModal15(false);
  };

  const moveStep15 = () => {
    setOpenModal14(false);
    setOpenModal15(true);
    setOpenModal16(false);
  };

  const moveStep16 = () => {
    setOpenModal15(false);
    setOpenModal16(true);
    setOpenModal17(false);
  };

  const moveStep17 = () => {
    setOpenModal16(false);
    setOpenModal17(true);
    setOpenModal18(false);
  };

  const moveStep18 = () => {
    setOpenModal17(false);
    setOpenModal18(true);
    setOpenModal19(false);
  };

  const moveStep19 = () => {
    setOpenModal18(false);
    setOpenModal19(true);
    setOpenModal20(false);
  };

  const moveStep20 = () => {
    setOpenModal19(false);
    setOpenModal20(true);
    setOpenModal21(false);
  };

  const moveStep21 = () => {
    setOpenModal20(false);
    setOpenModal21(true);
    setOpenModal22(false);
  };

  const moveStep22 = () => {
    setOpenModal21(false);
    setOpenModal22(true);
    setOpenModal23(false);
  };

  const moveStep23 = () => {
    setOpenModal22(false);
    setOpenModal23(true);
    setOpenModal24(false);
  };

  const moveStep24 = () => {
    setOpenModal23(false);
    setOpenModal24(true);
    setOpenModal25(false);
  };

  const moveStep25 = () => {
    setOpenModal24(false);
    setOpenModal25(true);
    setOpenModal26(false);
  };

  const moveStep26 = () => {
    setOpenModal25(false);
    setOpenModal26(true);
    setOpenModal27(false);
  };

  const moveStep27 = () => {
    setOpenModal26(false);
    setOpenModal27(true);
    setOpenModal28(false);
  };

  const moveStep28 = () => {
    setOpenModal27(false);
    setOpenModal28(true);
    setOpenModal29(false);
  };

  const moveStep29 = () => {
    setOpenModal28(false);
    setOpenModal29(true);
    setOpenModal30(false);
  };

  const moveStep30 = () => {
    setOpenModal29(false);
    setOpenModal30(true);
    setOpenModal31(false);
  };

  const moveStep31 = () => {
    setOpenModal30(false);
    setOpenModal31(true);
    setOpenModal32(false);
  };

  const moveStep32 = () => {
    setOpenModal31(false);
    setOpenModal32(true);
    setOpenModal33(false);
  };

  const moveStep33 = () => {
    setOpenModal32(false);
    setOpenModal33(true);
  };

  const finishModals = () => {
    setOpenModal33(false);
    setFinishedSetup(true);
    router.push("/coach-portal/coach-profile");
  };

  const addMoreLanguages = () => {
    if (selectedLanguages.length < 3) {
      setSelectedLanguages((curr) => {
        return [...curr, { id: curr[curr.length - 1].id + 1, name: "" }];
      });
    }
  };

  const removeMoreLanguages = (id: any) => {
    setSelectedLanguages((curr) => {
      return curr.filter((lang) => {
        return lang.id !== id;
      });
    });
  };

  const setLanguageLevel = (id: any, fluency: any) => {
    setSelectedLanguages((currLangs) => {
      let updatedLangs = currLangs.map((lang) => {
        if (lang.id === id) {
          return {
            ...lang,
            fluency,
          };
        }
        return lang;
      });

      return updatedLangs;
    });
  };

  const setLanguage = (id: any, language: any) => {
    setSelectedLanguages((currLangs) => {
      let updatedLangs = currLangs.map((lang) => {
        if (lang.id === id) {
          return {
            ...lang,
            name: language,
          };
        }
        return lang;
      });

      return updatedLangs;
    });
  };

  console.log(selectedLanguages);

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

          {finishedSetup ? (
            <div className={styles.coachProfile}>
              <h2>Coach Profile</h2>
              <div className={styles.topActionBtns}>
                <button className={styles.favoritesBtn}>
                  <img
                    src={`${IMAGE_URL}/coach-portal/heart-profile.svg`}
                    alt=""
                  />
                </button>
                <button className={styles.contactBtn}>
                  <span>Contact Coach</span>
                  <img
                    src={`${IMAGE_URL}/coach-portal/contact-coach.svg`}
                    alt=""
                  />
                </button>
                <button className={styles.requestBtn}>
                  <span>Request a Proposal</span>
                  <img
                    src={`${IMAGE_URL}/coach-portal/request-proposal.svg`}
                    alt=""
                  />
                </button>
              </div>
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
                      <p>Verified</p>
                    </div>
                    <h4>Executive Business Coach</h4>
                    <div className={styles.profileTitle}>
                      12 Years of Experience in Business Coaching
                    </div>

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
                  <div className={styles.rightContent}>
                    <div className={styles.rightSubContent}>
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
                    </div>
                    <div className={styles.rightSubContent}>
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
              <div className={styles.coachProfileHeader}>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "about" ? styles.headerSelected : null
                  }`}
                  onClick={() => setHeaderSelected("about")}
                >
                  About Coach
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "services-offered"
                      ? styles.headerSelected
                      : null
                  }`}
                  onClick={() => setHeaderSelected("services-offered")}
                >
                  Services Offered
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "programs" ? styles.headerSelected : null
                  }`}
                  onClick={() => setHeaderSelected("programs")}
                >
                  Coach's Programs
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "qualifications"
                      ? styles.headerSelected
                      : null
                  }`}
                  onClick={() => setHeaderSelected("qualifications")}
                >
                  Qualifications
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "case-studies"
                      ? styles.headerSelected
                      : null
                  }`}
                  onClick={() => setHeaderSelected("case-studies")}
                >
                  Case Studies
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "testimonials"
                      ? styles.headerSelected
                      : null
                  }`}
                  onClick={() => setHeaderSelected("testimonials")}
                >
                  Testimonials
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "reviews" ? styles.headerSelected : null
                  }`}
                  onClick={() => setHeaderSelected("reviews")}
                >
                  Reviews
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "business-info"
                      ? styles.headerSelected
                      : null
                  }`}
                  onClick={() => setHeaderSelected("business-info")}
                >
                  My Business Info
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "faq" ? styles.headerSelected : null
                  }`}
                  onClick={() => setHeaderSelected("faq")}
                >
                  FAQ
                </div>
                <div
                  className={`${styles.coachProfileHeaderItem} ${
                    headerSelected === "other-info"
                      ? styles.headerSelected
                      : null
                  }`}
                  onClick={() => setHeaderSelected("other-info")}
                >
                  Other Info
                </div>
              </div>
              <div className={styles.content}>
                {headerSelected === "about" && (
                  <AboutMe
                    content={content}
                    edit={() => {
                      setEditOn(true);
                      setOpenModal16(true);
                    }}
                  />
                )}
                {headerSelected === "services-offered" && (
                  <ServicesOffered services={services} />
                )}
                {headerSelected === "programs" && (
                  <ProgramsOffered
                    edit={() => {
                      setEditOn(true);
                    }}
                  />
                )}
                {headerSelected === "qualifications" && (
                  <Qualifications
                    selectedOptions={qualifications}
                    editDoc={(doc: any) => {
                      setOpenEditCerCertificateModal(true);
                      setDoc(doc);
                      setDocName(doc.name);
                    }}
                  />
                )}
                {headerSelected === "case-studies" && (
                  <CaseStudies
                    selectedOptions={caseStudies}
                    editDoc={(doc: any) => {
                      setOpenEditCaseStudyModal(true);
                      setDoc(doc);
                    }}
                  />
                )}
                {headerSelected === "testimonials" && (
                  <Testimonials
                    selectedOptions={testimonials}
                    editDoc={(doc: any) => {
                      setEditOn(true);
                      setOpenModal25(true);
                      setDoc(doc);
                    }}
                  />
                )}

                {headerSelected === "business-info" && (
                  <BusinessInfo
                    edit={() => {
                      setEditOn(true);
                      setOpenModal7_1(true);
                    }}
                  />
                )}
                {headerSelected === "reviews" && (
                  <Reviews selectedOptions={testimonials} />
                )}
                {headerSelected === "faq" && <FAQ faqs={faqs} />}
                {headerSelected === "other-info" && (
                  <OtherInfo
                    edit1={() => {
                      setEditOn(true);
                      setOpenEditIntroVideoModal(true);
                    }}
                    edit2={() => {
                      setEditOn(true);
                      setOpenModal4_1(true);
                      setSelectedLanguages(staticSelectedLanguages);
                    }}
                    edit3={() => {
                      setEditOn(true);
                      setOpenModal7_1(true);
                    }}
                  />
                )}
              </div>
              <div className={styles.bottomContainer}>
                <div>
                  {/* <button
                  className={`${styles.leftBtn} ${
                    editOn ? styles.editDisabled : null
                  }`}
                  onClick={openEditModal}
                  disabled={editOn}
                >
                  <img src={`${IMAGE_URL}/coach-portal/edit.svg`} alt="" />
                  <span> </span>
                </button> */}
                  <Link href={`/coach-portal/coach-profile/preview`}>
                    <button className={styles.rightRightBtn} onClick={() => {}}>
                      <img src={`${IMAGE_URL}/coach-portal/eye.svg`} alt="" />
                      <span>Preview</span>
                    </button>
                  </Link>
                </div>
                <div className={styles.buttonContainer}>
                  <button
                    className={styles.leftBtn}
                    onClick={() => setEditOn(false)}
                  >
                    <img
                      src={`${IMAGE_URL}/coach-portal/video-save.svg`}
                      alt=""
                    />
                    <span>Save as Draft</span>
                  </button>
                  {/* <Link href={"/coach-portal/coach-profile"}> */}
                  <button className={styles.rightBtn} onClick={() => {}}>
                    <span>Submit for Approval</span>
                    <img
                      src={`${IMAGE_URL}/coach-portal/arrow-right.svg`}
                      alt=""
                    />
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          ) : (
            <OnboardingTable />
          )}

          <>
            <CoachCreateProfileModal1
              nextStep={moveStep2}
              modalIsOpen={openModal1}
              prevStep={closeModal}
            />

            <CoachCreateProfileModal2
              nextStep={moveStep3}
              modalIsOpen={openModal2}
              prevStep={moveStep1}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal3
              nextStep={moveStep4}
              modalIsOpen={openModal3}
              prevStep={moveStep2}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal4
              nextStep={moveStep4_1}
              modalIsOpen={openModal4}
              prevStep={moveStep3}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal4_1
              nextStep={moveStep5}
              modalIsOpen={openModal4_1}
              prevStep={moveStep2}
              selectedOptions={selectedLanguages}
              setLanguageLevel={setLanguageLevel}
              setLanguage={setLanguage}
              addMoreLanguages={addMoreLanguages}
              removeMoreLanguages={removeMoreLanguages}
              editMode={editOn}
              preloadedContent={content}
              closeNow={() => {
                setOpenModal4_1(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenModal4_1(false);
                setEditOn(false);
              }}
            />

            <CoachCreateProfileModal5
              nextStep={moveStep6}
              modalIsOpen={openModal5}
              prevStep={moveStep4}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal6
              nextStep={moveStep7}
              modalIsOpen={openModal6}
              prevStep={moveStep5}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal7
              nextStep={moveStep7_1}
              modalIsOpen={openModal7}
              prevStep={moveStep6}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal7_1
              nextStep={moveStep8}
              modalIsOpen={openModal7_1}
              prevStep={moveStep7}
              editMode={editOn}
              preloadedContent={content}
              closeNow={() => {
                setOpenModal7_1(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenModal7_1(false);
                setEditOn(false);
              }}
            />

            <CoachCreateProfileModal8
              nextStep={moveStep9}
              modalIsOpen={openModal8}
              prevStep={moveStep7}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal9
              nextStep={moveStep10}
              modalIsOpen={openModal9}
              prevStep={moveStep8}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal10
              nextStep={moveStep11}
              modalIsOpen={openModal10}
              prevStep={moveStep9}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal11
              nextStep={moveStep12}
              modalIsOpen={openModal11}
              prevStep={moveStep10}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal12
              nextStep={moveStep13}
              modalIsOpen={openModal12}
              prevStep={moveStep11}
              handleSelectedImg={handleSelectedImg}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal13
              nextStep={moveStep14}
              modalIsOpen={openModal13}
              prevStep={moveStep12}
              selectedImg={selectedImg}
              setSelectedImg={(value: string) => setSelectedImg(value)}
              closeModal={closeModal}
            />

            <CoachUplaodSuccessModal
              nextStep={moveStep15}
              modalIsOpen={openModal14}
              prevStep={moveStep13}
              // closeModal={closeModal}
            />

            <CoachProfileInfoModal
              nextStep={moveStep16}
              modalIsOpen={openModal15}
              prevStep={moveStep14}
              // closeModal={closeModal}
            />

            <CoachAddAboutMeModal
              nextStep={moveStep17}
              modalIsOpen={openModal16}
              prevStep={moveStep15}
              editMode={editOn}
              preloadedContent={content}
              closeNow={() => {
                setOpenModal16(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenModal16(false);
                setEditOn(false);
              }}
              // closeModal={closeModal}
            />

            <CoachCreateProfileModal17
              nextStep={moveStep18}
              modalIsOpen={openModal17}
              prevStep={moveStep16}
              selectedOptions={selectedCertificateOptions}
              setSelectedOptions={setSelectedCertificateOptions}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal18
              nextStep={moveStep19}
              modalIsOpen={openModal18}
              prevStep={moveStep17}
              selectedOptions={selectedCertificateOptions}
              setReviewDoc={(doc: any) => {
                setReviewDoc(doc);
                setOpenCertificationsList(true);
              }}
              docs={docs}
              setDocs={setDocs}
              doc={doc}
              setDoc={setDoc}
              currentDoc={currentDoc}
              setCurrentDoc={setCurrentDoc}
              deleteDoc={() => {
                setOpenDeleteCertificate(true);
              }}
              closeModal={closeModal}
            />

            <CertificationsReviewModal
              modalIsOpen={openCertificationsList}
              reviewDoc={reviewDoc}
              confirm={() => {
                setOpenCertificationsList(false);
              }}
              // closeModal={closeModal}
            />

            <DeleteCertificateModal
              modalIsOpen={openDeleteCertificate}
              confirm={() => {
                deleteDoc();
                setOpenDeleteCertificate(false);
              }}
              cancel={() => {
                setOpenDeleteCertificate(false);
              }}
            />

            <CoachCreateProfileModal19
              nextStep={moveStep20}
              modalIsOpen={openModal19}
              prevStep={moveStep18}
              selectedOptions={selectedCertificateOptions}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal20
              nextStep={moveStep21}
              modalIsOpen={openModal20}
              prevStep={moveStep19}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal21
              nextStep={moveStep22}
              modalIsOpen={openModal21}
              prevStep={moveStep20}
              numberOfCases={numberOfCases}
              setCaseStudies={(val: any) => setNumberOfCases(val)}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal22
              nextStep={moveStep23}
              modalIsOpen={openModal22}
              prevStep={moveStep21}
              numberOfCaseStudies={numberOfCases}
              setCaseStudies={setNumberOfCases}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal23
              nextStep={moveStep24}
              modalIsOpen={openModal23}
              prevStep={moveStep22}
              selectedOptions={[
                {
                  name: "Team Coaching - Case Study",
                },
                {
                  name: "Executive Coaching - Case Study",
                },
              ]}
              closeModal={closeModal}
            />
            <CoachCreateProfileModal24
              nextStep={moveStep25}
              modalIsOpen={openModal24}
              prevStep={moveStep23}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal25
              nextStep={moveStep26}
              modalIsOpen={openModal25}
              prevStep={moveStep24}
              editMode={editOn}
              loadedDoc={doc}
              closeNow={() => {
                setOpenModal25(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenModal25(false);
                setEditOn(false);
              }}
              closeModal={closeModal}
            />
            {/* first time direct add from modal 25 */}
            <CoachCreateProfileModal26
              nextStep={moveStep27}
              modalIsOpen={openModal26}
              prevStep={moveStep25}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal27
              nextStep={moveStep28}
              modalIsOpen={openModal27}
              prevStep={moveStep26}
              deleteTestimonial={() => setOpenDeleteTestimonial(true)}
              addNewTestimonial={() => {
                setOpenModal26One(true);
                setOpenModal27(false);
              }}
              closeModal={closeModal}
            />

            {/* opened from modal 27 after adding testimonial */}
            <CoachCreateProfileModal26
              nextStep={() => {
                setOpenModal26One(false);
                setOpenModal27(true);
              }}
              modalIsOpen={openModal26One}
              prevStep={() => {
                setOpenModal26One(false);
                setOpenModal27(true);
              }}
              closeModal={closeModal}
            />

            <DeleteCertificateModal
              modalIsOpen={openDeleteTestimonial}
              confirm={() => {
                setOpenDeleteTestimonial(false);
              }}
              cancel={() => {
                setOpenDeleteTestimonial(false);
              }}
            />

            <CoachCreateProfileModal28
              nextStep={moveStep29}
              modalIsOpen={openModal28}
              prevStep={moveStep27}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal29
              nextStep={moveStep30}
              modalIsOpen={openModal29}
              prevStep={moveStep28}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal30
              nextStep={moveStep31}
              modalIsOpen={openModal30}
              prevStep={moveStep29}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal31
              nextStep={moveStep32}
              modalIsOpen={openModal31}
              prevStep={moveStep30}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal32
              nextStep={moveStep33}
              modalIsOpen={openModal32}
              prevStep={moveStep31}
              closeModal={closeModal}
            />

            <CoachCreateProfileModal33
              nextStep={finishModals}
              modalIsOpen={openModal33}
              prevStep={moveStep32}
              closeModal={closeModal}
            />
          </>

          <>
            <EditCertificateModal
              modalIsOpen={openEditCerCertificateModal}
              setReviewDoc={(doc: any) => {
                setReviewDoc(doc);
                setOpenCertificationsList(true);
              }}
              doc={doc}
              setDoc={setDoc}
              docName={docName}
              deleteDoc={() => {
                // setOpenDeleteCertificate(true);
                setDoc(null);
              }}
              // editMode={editOn}
              // preloadedContent={content}
              closeNow={() => {
                setOpenEditCerCertificateModal(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenEditCerCertificateModal(false);
                setEditOn(false);
              }}
            />
            <EditCaseStudyModal
              modalIsOpen={openEditCaseStudyModal}
              setReviewDoc={(doc: any) => {
                setReviewDoc(doc);
                setOpenCertificationsList(true);
              }}
              doc={doc}
              setDoc={setDoc}
              docName={docName}
              deleteDoc={() => {
                // setOpenDeleteCertificate(true);
                setDoc(null);
              }}
              // editMode={editOn}
              // preloadedContent={content}
              closeNow={() => {
                setOpenEditCaseStudyModal(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenEditCaseStudyModal(false);
                setEditOn(false);
              }}
            />

            <EditIntroVideo
              modalIsOpen={openEditIntroVideoModal}
              closeNow={() => {
                setOpenEditIntroVideoModal(false);
                setEditOn(false);
                setOpenSuccessModal(true);
              }}
              cancelNow={() => {
                setOpenEditIntroVideoModal(false);
                setEditOn(false);
              }}
            />
          </>

          <SaveSuccessModal
            modalIsOpen={openSuccessModal}
            closeNow={() => {
              setOpenSuccessModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
