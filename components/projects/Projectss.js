import Image from 'next/image'
import React from 'react'
import styles from "./../../styles/Proj.module.css"
import {RiPlayCircleLine} from "react-icons/ri"
import {FaGlobeAsia} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
import topProjects from "./topProjects.json";

const Projectss = () => {
  return (
    <section >
          <h5>My Work</h5>
        <h2>Featured projects</h2>
        {topProjects.map((item,index)=>{
             const isEven = index % 2 === 0;
            return <div key={item.id} className={["container", styles.project].join(" ")}>
            <div className={`${isEven? styles.image_left : styles.image_right}`}>
            <Image className={styles.image_tag}  src={item.image}  layout='fill' objectFit='cover'  quality={100} alt="About me"  />
            </div>
            <div  className={`${isEven? styles.content_right : styles.content_left}`} >
      <div   className={`${isEven? styles.header_right : styles.header_left}`}>
          <p>Featured project</p> 
          <h3 className={styles.head} style={{textAlign:isEven?"right":"left"}}>{item.title}</h3>
          <h3 className={styles.head2} >{item.title}</h3>
          </div>
      <div className={styles.info}>{item.details}</div>
      <div>
        <div >
            <ul  className={`${isEven? styles.project_tech_list_right : styles.project_tech_list_left}`}  >{item.tech.map((tech,index)=>{return <li key={index}>{tech}</li>})}</ul>
            </div>
            <div className={`${isEven? styles.project_cta_right : styles.project_cta_left}`}>
            <a href={item.github} rel='noopener noreferrer' target='_blank'>
            <button className={styles.btn}>
              <AiFillGithub style={{fontSize:"1rem",}}/>  Github
              </button>
              </a>

              <a href={item.demo} rel='noopener noreferrer' target='_blank'>
              <button  className={styles.btn}>
              <FaGlobeAsia style={{fontSize:"0.9rem",}}/>  Go Live
              </button>
              </a>

              <a href={item.github} rel='noopener noreferrer' target='_blank'>
              <button  className={styles.btn}>
                 <RiPlayCircleLine style={{fontSize:"1rem",}}/> <p className={styles.watch_demo}>Watch Demo</p>
              </button>
              </a>

            </div>
            </div>
            </div>
            </div>
        })}
    </section>
  )
}

export default Projectss
