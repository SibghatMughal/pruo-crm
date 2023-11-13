"use client";

import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./EditIntroVideo.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IMAGE_URL } from "@/constants/endpoints";
import { Slider, styled } from "@mui/material";
import { CancelModal } from "@/components/CoachPortal/CoachProfile";

const PrettoSlider = styled(Slider)({
  color: "#fff",
  height: 5,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 20,
    height: 20,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#c0c0c0",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

interface Props {
  modalIsOpen: boolean;
  closeNow: () => void;
  cancelNow: () => void;
}

const mimeType = 'video/webm; codecs="opus,vp8"';

const EditIntroVideo: FC<Props> = ({ modalIsOpen, closeNow, cancelNow }) => {
  const [openCancelModal, setOpenCancelModal] = useState(false);

  const [permission, setPermission] = useState(false);

  const [step, setStep] = useState(1);

  const mediaRecorder = useRef<any>(null);

  const liveVideoFeed = useRef<any>();

  const recordVideoFeed = useRef<HTMLVideoElement>(null!);

  const [recordingStatus, setRecordingStatus] = useState("recorded");

  const [stream, setStream] = useState<any>(null);

  const [recordedVideo, setRecordedVideo] = useState<any>(null);

  const [videoChunks, setVideoChunks] = useState([]);

  const [videoProgress, setVideoProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(30);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (step === 3) {
      const vid: HTMLVideoElement | any = document.getElementById(
        "purocoach-vd-player"
      );
      vid?.addEventListener("loadeddata", function () {
        console.log(vid);

        // setVideoTime(vid.duration);
      });
    }
  }, [step, recordedVideo]);

  useEffect(() => {
    let interval: any;
    if (videoTime && recordedVideo && recordVideoFeed) {
      interval = setInterval(function () {
        setCurrentTime(recordVideoFeed?.current?.currentTime);
        const temp = Math.round(
          (recordVideoFeed?.current?.currentTime / videoTime) * 100
        );
        console.log(
          "temp",
          temp,
          recordVideoFeed?.current?.currentTime,
          videoTime
        );

        if (videoProgress >= 100) {
          clearInterval(interval);
        }

        if (recordVideoFeed?.current?.currentTime !== 0 && temp !== Infinity) {
          if (temp > 100) {
            return;
          }
          setVideoProgress(temp);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [videoTime, recordedVideo, recordVideoFeed]);

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

  const startRecording = async () => {
    try {
      let tempStream = await getCameraPermission();
      setRecordingStatus("recording");
      setStep(2);
      setVideoProgress(0);
      setCurrentTime(0);

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

  const toggleVideo = (control: string) => {
    if (control === "play") {
      recordVideoFeed?.current?.play();
      setPlaying(true);
      let vid: any = document.getElementById("purocoach-vd-player");
      // setVideoTime(vid.duration);
    } else {
      recordVideoFeed?.current?.pause();
      setPlaying(false);
    }
  };

  console.log(currentTime, videoTime, videoProgress);

  return (
    <Modal isOpen={modalIsOpen} className={styles.modal} ariaHideApp={false}>
      <div className={styles.container}>
        <h3>Create a personal introduction video</h3>

        <h4>Intro Video</h4>
        <p>You can Upload or record with max 2 mins length</p>

        {recordingStatus === "inactive" && (
          <div className={styles.recordContainer}>
            <p>You record a video</p>
            <button
              onClick={() => {
                startRecording();
              }}
            >
              <img src={`${IMAGE_URL}/coach-portal/record.svg`} alt="" />
              <span>Record a video</span>
            </button>
          </div>
        )}

        {/* {(recordingStatus === "recording" ||
          recordingStatus === "recorded") && ( */}
        <div
          className={`${styles.videoPlayer} ${
            (recordingStatus === "inactive" ||
              recordingStatus === "recorded") &&
            styles.hidePlayer
          }`}
        >
          {/* {!recordedVideo ? ( */}
          <video ref={liveVideoFeed} autoPlay className="live-player"></video>
          {/* ) : null} */}
          {recordedVideo ? (
            <div className="recorded-player">
              <video className="recorded" src={recordedVideo} controls></video>
              <a download href={recordedVideo}>
                Download Recording
              </a>
            </div>
          ) : null}

          <div className={styles.topControls}>
            <div className={styles.topControlsLeft}>
              <img src={`${IMAGE_URL}/coach-portal/rec-button.svg`} alt="" />
              <span>REC 00:01:24</span>
            </div>
            <div className={styles.topControlsRight}>
              <img src={`${IMAGE_URL}/coach-portal/video-close.svg`} alt="" />
            </div>
          </div>

          <div className={styles.bottomControls}>
            <div className={styles.bottomControlsLeft}>
              <img src={`${IMAGE_URL}/coach-portal/audio.svg`} alt="" />
              <img src={`${IMAGE_URL}/coach-portal/video-cam.svg`} alt="" />
            </div>
            <div
              className={styles.bottomControlsCenter}
              onClick={stopRecording}
            >
              <img src={`${IMAGE_URL}/coach-portal/video-stop.svg`} alt="" />
            </div>
            <div className={styles.bottomControlsRight}>
              <img src={`${IMAGE_URL}/coach-portal/mic.svg`} alt="" />
              <img
                src={`${IMAGE_URL}/coach-portal/video-settings.svg`}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* )} */}

        <div
          className={`${styles.videoPlayer} ${
            (recordingStatus === "inactive" ||
              recordingStatus === "recording") &&
            styles.hidePlayer
          }`}
        >
          <div className={styles.recordePlayer}>
            <video
              className="recorded"
              ref={recordVideoFeed}
              src={recordedVideo}
              id="purocoach-vd-player"
            ></video>
            {/* <a download href={recordedVideo}>
              Download Recording
            </a> */}
          </div>

          <div className={styles.playerTopControls}>
            <div className={styles.playerTopControlsLeft}>
              <p>Kiera Botosh Intro</p>
            </div>
            <div className={styles.playerTopControlsRight}>
              <img src={`${IMAGE_URL}/coach-portal/video-close.svg`} alt="" />
            </div>
          </div>

          <div className={styles.playerBottomControlsContainer}>
            <div className={styles.playerBottomSlider}>
              <PrettoSlider value={videoProgress} />
            </div>
            <div className={styles.playerBottomControls}>
              <div className={styles.playerBottomControlsLeft}>
                <img
                  src={`${IMAGE_URL}/coach-portal/video-pause.svg`}
                  alt=""
                  onClick={() => toggleVideo(playing ? "pause" : "play")}
                />
                <img
                  src={`${IMAGE_URL}/coach-portal/video-rewind.svg`}
                  alt=""
                />
                <img
                  src={`${IMAGE_URL}/coach-portal/video-forward.svg`}
                  alt=""
                />
              </div>
              <div className={styles.playerBottomControlsRight}>
                <img src={`${IMAGE_URL}/coach-portal/video-audio.svg`} alt="" />
                <img
                  src={`${IMAGE_URL}/coach-portal/video-message.svg`}
                  alt=""
                />
                <img
                  src={`${IMAGE_URL}/coach-portal/video-full-screen.svg`}
                  alt=""
                />
                <img
                  src={`${IMAGE_URL}/coach-portal/video-options.svg`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {recordingStatus === "recorded" && (
          <div className={styles.bottomContainer}>
            <div>
              <button
                className={styles.specialBtn}
                onClick={() => setOpenCancelModal(true)}
              >
                <img src={`${IMAGE_URL}/coach-portal/arrow-left.svg`} alt="" />
                <span>Cancel</span>
              </button>
            </div>
            <div className={styles.buttonContainer}>
              <button className={styles.leftBtn} onClick={startRecording}>
                <img src={`${IMAGE_URL}/coach-portal/record.svg`} alt="" />
                <span>Re-Record</span>
              </button>
              {/* <Link href={"/coach-portal/coach-profile"}> */}
              <button className={styles.specialBtn} onClick={closeNow}>
                <img src={`${IMAGE_URL}/coach-portal/video-save.svg`} alt="" />
                <span>Save</span>
              </button>
              {/* </Link> */}
            </div>
          </div>
        )}

        {(recordingStatus === "inactive" ||
          recordingStatus === "recording") && (
          <div className={styles.bottomContainer}>
            <div>
              {/* <button className={styles.finishBtn}>
                <span>Finish Later</span>
              </button> */}
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.leftBtn}
                onClick={() => setOpenCancelModal(true)}
              >
                <span>Cancel</span>
              </button>
              {/* <Link href={"/coach-portal/coach-profile"}> */}
              <button className={styles.rightBtn} onClick={closeNow}>
                <span>Save</span>
                {/* <img src={`${IMAGE_URL}/coach-portal/arrow-right.svg`} alt="" /> */}
              </button>
              {/* </Link> */}
            </div>
          </div>
        )}
        <CancelModal
          stayHere={() => setOpenCancelModal(false)}
          modalIsOpen={openCancelModal}
          closeNow={() => {
            setOpenCancelModal(false);
            cancelNow();
          }}
        />
        <img
          src={`${IMAGE_URL}/coach-portal/close.svg`}
          alt=""
          className={styles.closeImg}
        />
      </div>
    </Modal>
  );
};

export default EditIntroVideo;
