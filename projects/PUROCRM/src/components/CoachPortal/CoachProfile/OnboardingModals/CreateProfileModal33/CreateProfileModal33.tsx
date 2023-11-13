"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./CreateProfileModal33.module.css";
import Modal from "react-modal";
import { IMAGE_URL } from "@/constants/endpoints";

interface Props {
  nextStep: () => void;
  modalIsOpen: boolean;
  prevStep: () => void;
  closeModal: () => void;
}

const mimeType = 'video/webm; codecs="opus,vp8"';

const CreateProfileModal33: FC<Props> = ({
  modalIsOpen,
  nextStep,
  prevStep,
  closeModal,
}) => {
  const [permission, setPermission] = useState(false);

  const [step, setStep] = useState(1);

  const mediaRecorder = useRef<any>(null);

  const liveVideoFeed = useRef<any>();

  const recordVideoFeed = useRef<HTMLVideoElement>(null!);

  const [recordingStatus, setRecordingStatus] = useState("inactive");

  const [stream, setStream] = useState<any>(null);

  const [recordedVideo, setRecordedVideo] = useState<any>(null);

  const [videoChunks, setVideoChunks] = useState([]);

  const getCameraPermission = async () => {
    setRecordedVideo(null);
    //get video and audio permissions and then stream the result media stream to the videoSrc variable
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          audio: true,
          video: true,
        };
        const audioConstraints = { audio: true };

        // create audio and video streams separately
        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );

        setPermission(true);

        //combine both audio and video streams

        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);
        console.log("combinedStream", combinedStream);

        setStream(combinedStream);

        //set videostream to live feed player
        liveVideoFeed.current.srcObject = videoStream;

        return combinedStream;
      } catch (err) {
        console.log(err);
        return new MediaStream();
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
      return new MediaStream();
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      setTimeout(() => {
        getCameraPermission();
        console.log("started");
      }, 2000);
    }
  }, [modalIsOpen]);

  const startRecording = async () => {
    try {
      let tempStream = await getCameraPermission();
      setRecordingStatus("recording");
      setStep(2);

      const media = new MediaRecorder(tempStream, { mimeType });

      mediaRecorder.current = media;

      console.log(mediaRecorder);

      mediaRecorder.current.start();

      let localVideoChunks: any = [];

      mediaRecorder.current.ondataavailable = (event: any) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localVideoChunks.push(event.data);
      };

      setVideoChunks(localVideoChunks);
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = () => {
    try {
      setPermission(false);
      setRecordingStatus("recorded");
      mediaRecorder.current.stop();

      mediaRecorder.current.onstop = () => {
        const videoBlob = new Blob(videoChunks, { type: mimeType });
        const videoUrl = URL.createObjectURL(videoBlob);

        setRecordedVideo(videoUrl);

        setVideoChunks([]);
        setStep(3);
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Please verify your identity</h3>
        <div className={styles.contentContainer}>
          <div className={styles.contentContainerLeft}>
            <div className={styles.videoFeed}>
              <video
                ref={liveVideoFeed}
                autoPlay
                className="live-player"
              ></video>
            </div>
            <p>Please bring your face closer to make it proper</p>
          </div>
          <div className={styles.contentContainerRight}>
            <img
              src={`${IMAGE_URL}/coach-portal/verification-failed.svg`}
              alt=""
            />
            <p>Identity Not Verified</p>
          </div>
        </div>
        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
          onClick={closeModal}
        />

        <div className={styles.bottomContainer}>
          <div>
            <button className={styles.specialBtn} onClick={prevStep}>
              <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
              <span>Back</span>
            </button>
            <button className={styles.specialBtn}>
              <img src={`${IMAGE_URL}/coach-portal/video-save.svg`} alt="" />
              <span>Skip</span>
            </button>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.leftBtn} onClick={() => {}}>
              {/* <img src={`${IMAGE_URL}/coach-portal/record.svg`} alt="" /> */}
              <span>Save your face with camera</span>
            </button>
            {/* <Link href={"/coach-portal/coach-profile"}> */}
            <button className={styles.rightBtn} onClick={nextStep}>
              <span>Continue</span>
              <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" />
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateProfileModal33;
