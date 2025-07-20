import React, { useState } from "react";
import { motion, AnimatePresence, scale } from "framer-motion";

export default function ModalContact(props) {
  return (
    <motion.div
      className="overlay"
      onClick={() => props.closeModal()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="contact-modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="modal-wrapper">
          <h2 className="modal-title">~ Say Hello! ~</h2>
          <div className="contact-modal-content">
            <div className="contact-modal-content-wrapper">
              <div className="paragraph">
                <h2 className="modal-paragraph-header">
                  If you like Music, Games and food, let's connect!
                </h2>
                <div className="contact-button-wrapper">
                  <a
                    className="contact-link"
                    href="mailto:someone@example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="contact-svg mail"
                      width="68"
                      height="68"
                      viewBox="0 0 800 800"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M656.85 209.817C608.726 166.348 527.66 150 400 150C272.34 150 191.272 166.348 143.15 209.817M656.85 209.817C700.01 248.804 716.666 309.608 716.666 400C716.666 591.177 642.156 650 400 650C157.843 650 83.333 591.177 83.333 400C83.333 309.608 99.9903 248.804 143.15 209.817M656.85 209.817L447.14 419.527C421.103 445.56 378.893 445.56 352.86 419.527L143.15 209.817"
                        stroke="#6e5e9c"
                        strokeWidth="66.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="contact-link"
                    href="https://github.com/AJ-Ei"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 800 800"
                      fill="none"
                      className="contact-svg github"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M700 400C700 565.687 565.687 700 400 700C234.315 700 100 565.687 100 400C100 234.315 234.315 100 400 100C565.687 100 700 234.315 700 400Z"
                        stroke="#6e5e9c"
                        strokeWidth="66.6667"
                      ></path>
                      <path
                        d="M457.234 296.059C419.604 285.652 380.397 285.652 342.767 296.059C342.124 296.237 341.481 296.418 340.841 296.603C336.891 297.74 332.642 296.967 329.357 294.497C289.771 264.731 269.093 266.061 263.976 267.054C263.154 267.214 262.529 267.827 262.245 268.615C262.173 268.814 262.102 269.013 262.031 269.212C253.88 292.169 252.635 317.605 258.426 341.417C258.764 342.804 259.124 344.184 259.509 345.557C259.534 345.647 259.56 345.737 259.585 345.827C259.919 347.007 259.674 348.277 258.927 349.254C258.359 349.994 257.799 350.744 257.248 351.5C241.494 373.13 232.97 400.71 233.346 429.157C233.346 544.664 293.466 571.194 351.167 579.037L352.361 579.194C384.491 583.997 415.291 583.7 447.317 578.264L448.127 578.167C506.107 571.13 566.654 545.29 566.654 429.157C567.031 400.71 558.507 373.13 542.754 351.5C542.247 350.807 541.734 350.117 541.214 349.434L541.174 349.384C540.367 348.327 540.101 346.95 540.461 345.67C540.857 344.257 541.227 342.84 541.571 341.417C547.367 317.537 546.051 292.026 537.764 269.059C537.711 268.918 537.661 268.777 537.611 268.637C537.317 267.835 536.681 267.21 535.841 267.048C530.701 266.055 510.137 264.794 470.644 294.497C467.361 296.966 463.111 297.733 459.161 296.602C458.521 296.418 457.877 296.237 457.234 296.059Z"
                        stroke="#6e5e9c"
                        strokeWidth="66.6667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="contact-link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="contact-svg instagram"
                      width="68"
                      height="68"
                      viewBox="0 0 800 800"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M400 675C341.033 675 298.6 674.971 265.517 671.763C232.812 668.592 211.892 662.5 195.196 652.008C176.114 640.02 159.978 623.885 147.987 604.804C137.5 588.108 131.404 567.187 128.238 534.483C125.029 501.4 125 458.967 125 400C125 341.033 125.029 298.6 128.238 265.517C131.404 232.812 137.5 211.892 147.987 195.196C159.977 176.113 176.113 159.977 195.196 147.987C211.892 137.5 232.812 131.404 265.517 128.238C298.596 125.029 341.029 125 400 125C458.967 125 501.4 125.029 534.483 128.238C567.187 131.404 588.108 137.5 604.804 147.987C623.885 159.978 640.02 176.114 652.008 195.196C662.5 211.892 668.592 232.812 671.763 265.517C674.971 298.6 675 341.033 675 400C675 458.967 674.971 501.4 671.763 534.483C668.592 567.187 662.5 588.108 652.008 604.804C640.019 623.885 623.885 640.019 604.804 652.008C588.108 662.5 567.187 668.592 534.483 671.763C501.4 674.971 458.967 675 400 675Z"
                        stroke="#6e5e9c"
                        strokeWidth="66.7"
                      ></path>
                      <path
                        d="M400 525C469.036 525 525 469.036 525 400C525 330.964 469.036 275 400 275C330.964 275 275 330.964 275 400C275 469.036 330.964 525 400 525Z"
                        stroke="#6e5e9c"
                        strokeWidth="66.7"
                      ></path>
                      <path
                        d="M562.5 275C583.211 275 600 258.211 600 237.5C600 216.789 583.211 200 562.5 200C541.789 200 525 216.789 525 237.5C525 258.211 541.789 275 562.5 275Z"
                        fill="#6e5e9c"
                      ></path>
                    </svg>
                  </a>
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
