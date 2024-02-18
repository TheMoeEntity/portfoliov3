"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import styles from "./index.module.css";
import { useResize } from "@/Helpers/hooks";

const ContactPage = () => {
  const { val, setVal, textAreaRef } = useResize();

  const [status, setStatus] = useState("Send Message");

  return (
    <div className={styles.about}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactForm}>
        <div className={styles.form}>
          <div className={styles.left}>
            <div>
              <h1>Get in Touch</h1>
              <p>
                To purchase or request a demo for either of our products and
                services, please fill in the form or reach us via:
              </p>
              <ul>
                <li>
                  <i className="fa fa-angle-right"></i>
                  <i className="fa-solid fa-phone"></i>
                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="https://wa.me/+2349169126429"
                  >
                    (+234) 916 912 6429
                  </a>
                </li>
                <li>
                  <i className="fa fa-angle-right"></i>
                  <i className="fa-solid fa-envelope"></i>

                  <a
                    target={`_blank`}
                    rel="noopener noreferrer"
                    href="mailto:biz@greencal.com"
                  >
                    biz@greencal.com
                  </a>
                </li>
              </ul>
              <p>
                For general enquiries and to speak directly with an expert
                kindly reach us via:
              </p>
              <button>
                <a
                  target={`_blank`}
                  rel="noopener noreferrer"
                  href="mailto:info@greencal.com"
                >
                  info@greencal.com
                </a>
              </button>
              <h3>Head Office:</h3>
              <div>
                <i className="fa-solid fa-building"></i>
                Abakaliki, Ebonyi State, Nigeria.
              </div>
              <br />
              <div className={styles.maps}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33020.15565385796!2d8.051868107262973!3d6.363035566481815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105b5f7b70fc171f%3A0xcd60ec82fc0e88b4!2s50%2C%20Kpiri%20Kpiri%2C%20Abakaliki%20480001%2C%20Ebonyi!5e0!3m2!1sen!2sng!4v1706905445265!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  aria-hidden="false"
                  tabIndex={0}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="">Full Name:</label>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Email:</label>
                <input type="text" name="" id="" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Phone:</label>
                <input type="text" name="" id="" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="">Interested Service:</label>
                <select className="custom-select" style={{ width: "100%" }}>
                  <option>--Choose--</option>
                  <option>Donation</option>
                  <option>Support</option>
                  <option>Grants</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <textarea
                  className={styles.textArea}
                  placeholder="Message"
                  name=""
                  id=""
                  cols={10}
                  ref={textAreaRef}
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                  rows={1}
                ></textarea>
              </div>

              <div className={styles.formGroup}>
                <button type="submit">
                  {status !== "Send Message" && (
                    <i
                      className={`fa fa-spinner ${styles.spinning}`}
                      aria-hidden="true"
                    ></i>
                  )}
                  {status}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
