import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import styles from "./../../styles/Header.module.css"

function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://www.linkedin.com/in/max-vhanamane" target="__blank">
        <BsLinkedin />
      </a>
   <a href="https://github.com/MaxVhanamane" target="__blank">
        <BsGithub />
      </a>
        
        <a href="https://twitter.com/Maxvhanamane" target="__blank">
          <FaTwitter />
        </a>
    </div>
  );
}

export default SocialLinks;
