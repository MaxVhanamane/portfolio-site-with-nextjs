import React, { useRef, useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import styles from "./../../styles/Contact.module.css"

import emailjs from "@emailjs/browser";
import { AlertContext } from "../../context/AlertState";

function Contact() {
  // to display toast alert when the user adds a note.
  const AlertContextVal = useContext(AlertContext);
  const { alert, setAlert } = AlertContextVal;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40itlwe",
        "template_tmsgpiq",
        form.current,
        "Bgj22xBbbdJSvGTUr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    // Show Note added alert
    setAlert((preval) => ({
      ...preval,
      severity: "success",
      show: true,
      message: "Your message has been successfully Sent",
    }));
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className= {["container", styles.contact_container].join(" ")}>
        <div className={styles.contact_options}>
          <article className={styles.contact_option}>
            <HiOutlineMail className={styles.contact_option_icon} />
            <h4>Email</h4>
            <h5>maxvhanamane@gmail.com</h5>
            <a href="mailto:maxvhanamane@gmail.com" target="__blank">
              send a message
            </a>
          </article>
          <article className={styles.contact_option}>
            <BsInstagram className={styles.contact_option_icon} />
            <h4>Instagram</h4>
            <h5>oreo_max_8.0.0.8</h5>
            <a
              href="https://www.instagram.com/oreo_max_8.0.0.8/"
              target="__blank"
            >
              send a message
            </a>
          </article>
          <article className={styles.contact_option}>
            <BsWhatsapp className={styles.contact_option_icon} />
            <h4>What's app</h4>
            <h5>+918390008589</h5>
            <a
              href="https://api.whatsapp.com/send?phone=8390008589"
              target="__blank"
            >
              send a message
            </a>
          </article>
        </div>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input className={styles.input}
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          <input className={styles.input} type="email" name="email" placeholder="Enter your email" />
          <textarea className={styles.textarea} name="message" rows="7"></textarea >
          <button type="submit" className="btn btn_primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
