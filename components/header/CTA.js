import React from "react";
import styles from "./../../styles/Header.module.css"

function Cta() {
  return (
    <div className={styles.cta}>
      <a href="/assets/cv.pdf" download className="btn">
        Download CV
      </a>
      <a href="#contact" className= "btn btn_primary">
        Contact me
      </a>
    </div>
  );
}

export default Cta;
