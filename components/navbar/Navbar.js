import React,{useContext} from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { TbBook2 } from "react-icons/tb";
import { IoChatboxOutline } from "react-icons/io5";
import { IoGitNetworkOutline } from "react-icons/io5";
import { useState } from "react";
import styles from "./../../styles/Navbar.module.css"
import { AlertContext } from "../../context/AlertState";

function Navbar() {
  const [activeState, setActiveState] = useState("#");
  const { navBarRef } = useContext(AlertContext);
  return (
    <nav ref={navBarRef} className={styles.nav}>
      <a
        href="#home"
        onClick={() => {
          setActiveState("#");
        }}
        className={activeState === "#" ? `${styles.active}` : ""}
        title="home"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveState("#about");
        }}
        className={activeState === "#about" ? `${styles.active}` : ""}
        title="about"
      >
        <IoPersonOutline />
      </a>
      <a
        href="#skills"
        onClick={() => {
          setActiveState("#skills");
        }}
        className={activeState === "#skills" ? `${styles.active}` : ""}
        title="skills"
      >
        <TbBook2 />
      </a>
      <a
        href="#projects"
        onClick={() => {
          setActiveState("#projects");
        }}
        className={activeState === "#projects" ? `${styles.active}` : ""}
        title="projects"
      >
        <IoGitNetworkOutline />
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveState("#contact");
        }}
        className={activeState === "#contact" ? `${styles.active}` : ""}
        title="contact"
      >
        <IoChatboxOutline />
      </a>
    </nav>
  );
}

export default Navbar;
