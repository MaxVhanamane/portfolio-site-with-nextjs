import React from "react";
import CTA from "./CTA.js";
// import profile_picture from "../../assets/profile_picture.png";
import SocialLinks from "./SocialLinks";
import Typewriter from 'typewriter-effect';
import styles from "./../../styles/Header.module.css"


function Header() {


  
  return (
    <header className={styles.header} id="home">
       
      <div className={["container", styles.header_container].join(" ")}>
        <h5>Hello I&apos;m</h5>
        <h1 className={styles.typeeffect}>   <Typewriter
  
options={{
  strings: ['Max Vhanamane', 'a coder'],
  autoStart: true,
  loop: true,
  delay: 75
}}


/></h1>
     
        <h5 className={styles.textLight}>Fullstack Developer</h5>
       
        <CTA />
        {/* <div className="my_profile">
          <img src={profile_picture} alt="profile_picture" />
        </div> */}
        <SocialLinks />
        <a href="#contact" className={styles.scroll_down}>
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
