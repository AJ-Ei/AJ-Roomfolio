import React, { useState, Suspense } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";

export default function ModalWork(props) {
  return (
    <motion.div
      className="overlay"
      onClick={() => props.closeModal()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="work modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="modal-wrapper">
          <h1 className="modal-title">~ MY WORK ~</h1>
          <div className="modal-content">
            <div className="modal-content-wrapper">
              <div className="work-project">
                <div className="work-project-wrapper">
                  <div className="work-image-wrapper">
                    <img
                      src="/pictures/drum2.webp"
                      alt=""
                      className="work-base-image"
                    />
                  </div>
                  <div className="paragraph">
                    <h2 className="modal-paragraph-header">Drum kit</h2>
                    <p>
                      Created a broswer based interacted drum kit using react
                    </p>
                    <a
                      className="work-link"
                      target="_blank"
                      href="https://aj-markdown-preview.netlify.app/"
                    >
                      Drum kit
                    </a>
                  </div>
                </div>
              </div>

              <div className="work-project">
                <div className="work-project-wrapper">
                  <div className="work-image-wrapper">
                    <img
                      src="/pictures/markdown2.webp"
                      alt=""
                      className="work-base-image"
                    />
                  </div>
                  <div className="paragraph">
                    <h2 className="modal-paragraph-header">Markdown Preview</h2>
                    <p>
                      A functional markdown preview. just paste your makrdown
                    </p>
                    <a
                      className="work-link"
                      target="_blank"
                      href="https://aj-drum-machine.netlify.app/"
                    >
                      Markdown Preview
                    </a>
                  </div>
                </div>
              </div>

              <div className="work-project">
                <div className="work-project-wrapper">
                  <div className="work-image-wrapper">
                    <img
                      src="/pictures/pomodoro2.webp"
                      alt=""
                      className="work-base-image"
                    />
                  </div>
                  <div className="paragraph">
                    <h2 className="modal-paragraph-header">Pomodoro</h2>
                    <p>
                      A pomodoro timer made with react and has a really cool
                      alarm.
                    </p>
                    <a
                      className="work-link"
                      target="_blank"
                      href="https://aj-pomodoro.netlify.app/"
                    >
                      Pomodoro
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="close-button" onClick={() => props.closeModal()}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 98 96"
            className="exit-button-svg"
            fill="rgb(110, 94, 156)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="115.92"
              height="17.889"
              rx="8.94448"
              transform="matrix(-0.696845 0.717222 0.717222 0.696845 83.1709 0)"
              fill="rgb(110, 94, 156)"
            ></rect>
            <rect
              width="115.92"
              height="17.889"
              rx="8.94448"
              transform="matrix(0.73406 0.679084 0.679084 -0.73406 0 13.1318)"
              fill="rgb(110, 94, 156)"
            ></rect>
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}
