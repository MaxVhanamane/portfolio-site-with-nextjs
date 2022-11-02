import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from "./../../styles/Footer.module.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
function footer() {
  return (
    <>

    <footer className={styles.footer}>
    <hr className={styles.hr }/>
       <div className={styles.footer_container}>
      <div className={styles.footer_socials}>
       
      <Link passHref href="https://github.com/MaxVhanamane"><a  target="__blank">
        <BsGithub />
      </a></Link>
      <Link passHref href="https://www.linkedin.com/in/max-vhanamane"><a  target="__blank">
        <BsLinkedin />
      </a></Link>
      <Link passHref href="https://twitter.com/Maxvhanamane"><a  target="__blank">
          <FaTwitter />
        </a></Link>
        <Link passHref href="https://www.instagram.com/oreo_max_8.0.0.8"><a  target="__blank">
          <FaInstagram />
        </a></Link>
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


// passHref - Forces Link to send the href property to its child. Defaults to false
