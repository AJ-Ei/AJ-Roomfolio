import React, { useState, Suspense } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";

export default function ModalAbout(props) {
  return (
    <motion.div
      className="overlay"
      onClick={() => props.closeModal()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="modal-wrapper">
          <h2 className="modal-title">~ ABOUT ME ~</h2>
          <div className="modal-content">
            <div className="about-modal-content-wrapper">
              <div className="paragraph">
                <div className="about-image-wrapper">
                  <img
                    src="/pictures/sunset_moon.webp"
                    alt=""
                    className="work-base-image"
                  />
                </div>
                <h2 className="modal-paragraph-header">
                  Developer, Creative and Gamer at Heart 💜
                </h2>
                <p>
                  I am AJ! and I love to take my combination of technical skills and
                  creativity to make beautiful things for the world that i am
                  passionate about.
                </p>
                <p>
                  In my free time, you'll definitely catch me watching movies and playing games. I also love to cook and is always eager to try new recipes.
                </p>
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
