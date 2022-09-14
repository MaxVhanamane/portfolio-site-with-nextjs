import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from "./../../styles/Footer.module.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
function footer() {
  return (
    <>

    <footer className={styles.footer}>
    <hr className={styles.hr }/>
       <div className={styles.mx}>
      <div className={styles.footer_socials}>
       
      <a href="https://github.com/MaxVhanamane" target="__blank">
        <BsGithub />
      </a>
        <a href="https://www.linkedin.com/in/max-vhanamane" target="__blank">
        <BsLinkedin />
      </a>
        <a href="https://twitter.com/Maxvhanamane" target="__blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/oreo_max_8.0.0.8" target="__blank">
          <FaInstagram />
        </a>
      </div>
      <div className={styles.footer_copyright}>
        <small>&#169; {new Date().getFullYear()} maxvhanamane. All rights reserved.</small>
      </div>
      </div>
    </footer>
    </>
  );
}

export default footer;
