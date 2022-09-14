import React from "react";
// import { FaAward } from "react-icons/fa";
import styles from "./../../styles/About.module.css"

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className= {["container", styles.about_container].join(" ")}>
        <div className={styles.about_me}>
          <div className={styles.about_me_image}>
            <img src="/assets/about_me_img.jpg" alt="About me" />
          </div>
        </div>
        <div className={styles.about_content}>
          {/* <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
          </div> */}
          <p>
          I am a full stack developer located in India. I have a serious passion for web development.
          I enjoy building dynamic, creative products from start to finish.
          I primarily use Python/Javascript. However, picking up a new framework or language isn't a problem. 
          I have extensive programming experience and I'm comfortable developing on the frontend or backend.
          You can see some of the things I worked on in <a href="#projects">projects</a> section or on my <a href="https://github.com/MaxVhanamane" target="_blank">github</a> page. Fan of the Darknet Diaries podcast.
          </p>
          <a href="#contact" className="btn btn_primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
