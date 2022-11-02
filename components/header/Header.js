import React ,{useState,useContext} from "react";
import CTA from "./CTA.js";
// import profile_picture from "../../assets/profile_picture.png";
import SocialLinks from "./SocialLinks";
import Typewriter from 'typewriter-effect';
import styles from "./../../styles/Header.module.css"
import {BsSunFill} from "react-icons/bs"
import {TbMoonStars} from "react-icons/tb"
import { AlertContext } from "../../context/AlertState";

function Header() {

  const[changeIcon,setChangeIcon]=useState(true)
  const { navBarRef } = useContext(AlertContext);

  const handleClick=()=>{
    setChangeIcon(()=>!changeIcon)
document.body.classList.toggle("light_theme")
if(!document.body.classList.contains("light_theme")){

  document.body.style.backgroundImage ='url("/assets/otis-redding.png")';
  navBarRef.current.style.backgroundImage='url("/assets/otis-redding.png")';
  navBarRef.current.style.boxShadow='0 3px 3px #2c2c6c';

}
else{
  document.body.style.backgroundImage = "none";

  navBarRef.current.style.backgroundImage="none";
  navBarRef.current.style.boxShadow='0 3px 3px #afafef';


}

  }
  
  return (
    <header className={styles.header} id="home">
        {changeIcon?<BsSunFill className={styles.theme} onClick={handleClick}/>:
        <TbMoonStars className={styles.theme} onClick={handleClick}/>}
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
