import React, { useRef, useState } from "react";
import styles from "./../../styles/Projects.module.css"
import mstyles from "./../../styles/Modal.module.css"
import Image from "next/image";
import allProject from "./allProjects.json";
import  Link  from 'next/link';
import { BsHeartFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { RiPlayCircleLine } from "react-icons/ri";
import { FaGlobeAsia } from "react-icons/fa";
function Projects() {


  const [modal, setModal] = useState(false);
  const [videoDetails, setVideoDetails] = useState({videoTitle:"",videoLink:""});
  const [videoTitle, setVideoTitle] = useState("");
  const toggleModal = (data) => {
    setModal(!modal);
    setVideoDetails((prev)=>{return {...prev,videoTitle:data.videoTitle,videoLink:data.videoLink}})
  };

  // To avoid scrolling of a webpage when video is open
  if(process.window){
    if (modal) {
        document.body.classList.add(`${mstyles.active_modal}`)
      } else {
        document.body.classList.remove(`${mstyles.active_modal}`)
      }
    
  }


  return (
    <>
      {modal && (
        <div className={mstyles.modal}>
          <div onClick={toggleModal} className={mstyles.overlay}></div>
          <div className={mstyles.modal_content}>
            {/* <video className={styles.video} controls >
              <source src={vidLink} type="video/mp4" />
            </video> */}
           <iframe className={styles.video} src={videoDetails.videoLink} title={videoDetails.videoTitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="allowFullScreen"></iframe>
           
            <button className={mstyles.close_modal} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}

      <section id="projects">
        <h2>Other noteworthy projects</h2>
        {/*<h3>Client</h3>
        <div className={["container", styles.projects_container].join(" ")}>

{allProject.filter((data)=>{return data.level=="Client"}).map((data) => {

  return (

    <article key={data.id} className={styles.project_item} >
     

      <div 
         className={styles.project_item_image} >
          <div className={styles.ima}>
        <Image className={styles.blur} src={data.image} layout="fill"  objectFit="cover" quality={100} alt="project_image"  /></div>
        <div className= {[styles.content, styles.slide_up].join(" ")} >
          <div className={styles.description}>

          {data.details}
          </div>

          <div className={styles.tech_used}>
            {data.tech?.map((item)=>{return <span key={item} className={styles.tech}>{item}</span>})}
      
      

      </div>
        
        </div>

      </div>

      <h3 style={{textAlign:"left"}}>{data.title}</h3>

      {data.favourite&& <div className={styles.heart_icon}>
          <BsHeartFill style={{color:"red"}}/>
        </div>}
        
      <div className={styles.project_item_cta}>
        <a
          href={data.github}
          rel='noopener noreferrer' target='_blank'
        >
          <button className={styles.btn}> <AiFillGithub style={{fontSize:"1rem",}}/> <p>Github</p></button>
        </a>
         <a
          href={data.demo}
          rel='noopener noreferrer' target='_blank'
        >
          <button className={styles.btn}><FaGlobeAsia style={{fontSize:"0.9rem",}}/><p>Go Live</p></button>
        </a> 
        
         {data.videoLink &&<button className={styles.btn} onClick={() => { toggleModal(data) }}> <RiPlayCircleLine style={{fontSize:"1rem",}}/> <p>Watch Demo</p></button>}

       
      </div>
     
    </article>
   
  );
})}
</div> */}
        <div  style={{marginTop:"3rem"}}>
        <h3>Advanced</h3>
        <div className={["container", styles.projects_container].join(" ")}>

          {allProject.filter((data)=>{return data.level=="Advanced"}).map((data) => {

            return (
       
              <article key={data.id} className={styles.project_item} >
               
               {/* <div>
                {modal&& <ShakaPlayer autoPlay src={vidLink} />}
               </div> */}

                <div 
                   className={styles.project_item_image} >
                    <div className={styles.ima}>
                  <Image className={styles.blur} src={data.image} layout="fill"  objectFit="cover" quality={100} alt="project_image"  /></div>
                  <div className= {[styles.content, styles.slide_up].join(" ")} >
                    <div className={styles.description}>

                    {data.details}
                    </div>

                    <div className={styles.tech_used}>
                      {data.tech?.map((item)=>{return <span key={item} className={styles.tech}>{item}</span>})}
                
                

                </div>
                  
                  </div>

                </div>

                <h3 style={{textAlign:"left"}}>{data.title}</h3>
               
      {data.favourite&& <div className={styles.heart_icon}>
          <BsHeartFill style={{color:"red"}}/>
        </div>}
                <div className={styles.project_item_cta}>
                  <a
                    href={data.github}
                    rel='noopener noreferrer' target='_blank'
                  >
                    <button className={styles.btn}> <AiFillGithub style={{fontSize:"1rem",}}/> <p>Github</p></button>
                  </a>
                   <a
                    href={data.demo}
                    rel='noopener noreferrer' target='_blank'
                  >
                    <button className={styles.btn}><FaGlobeAsia style={{fontSize:"0.9rem",}}/><p>Go Live</p></button>
                  </a> 
                  
                   {data.videoLink &&<button className={styles.btn} onClick={() => { toggleModal(data) }}> <RiPlayCircleLine style={{fontSize:"1rem",}}/> </button>}

                  
                </div>
              </article>
             
            );
          })}
        </div>
        </div>
        <div  style={{marginTop:"3rem"}}>
     
     
        <h3>Intermediate</h3>
        <div className={["container", styles.projects_container].join(" ")}>

          {allProject.filter((data)=>{return data.level=="Intermediate"}).map((data) => {

            return (
       
              <article key={data.id} className={styles.project_item} >
               
               {/* <div>
                {modal&& <ShakaPlayer autoPlay src={vidLink} />}
               </div> */}

                <div 
                   className={styles.project_item_image} >
                    <div className={styles.ima}>
                  <Image className={styles.blur} src={data.image} layout="fill"  objectFit="cover" quality={100} alt="project_image"  /></div>
                  <div className= {[styles.content, styles.slide_up].join(" ")} >
                    <div className={styles.description}>

                    {data.details}
                    </div>

                    <div className={styles.tech_used}>
                      {data.tech?.map((item)=>{return <span key={item} className={styles.tech}>{item}</span>})}
                
                

                </div>
                  
                  </div>

                </div>

                <h3 style={{textAlign:"left"}}>{data.title}</h3>
               
      {data.favourite&& <div className={styles.heart_icon}>
          <BsHeartFill style={{color:"red"}}/>
        </div>}
                <div className={styles.project_item_cta}>
                  <a
                    href={data.github}
                    rel='noopener noreferrer' target='_blank'
                  >
                    <button className={styles.btn}>Github</button>
                  </a>
                   <a
                    href={data.demo}
                    rel='noopener noreferrer' target='_blank'
                  >
                    <button className={styles.btn}>Go Live</button>
                  </a> 
                  
                   {data.videoLink &&<button className={styles.btn} onClick={() => { toggleModal(data) }}>Watch Demo</button>}

                  
                </div>
              </article>
             
            );
          })}
        </div>
        </div>
      </section>
      
      </>
  );
}

export default Projects;

// for reference 
   // to get nodes inside the article tag use querySelector eg. e.currentTarget.querySelector('img')
          // changing the src of an image on hover using onMouseEnter={e =>e.currentTarget.querySelector('img').src=data.image[1]

          // className="project_item" onMouseEnter={e =>e.currentTarget.querySelector('img').src=data.image[1]} onMouseLeave={e =>e.currentTarget.querySelector('img').src=data.image[0]}


//    { "id":3,
//     "image":"https://media.istockphoto.com/photos/to-do-list-in-notebook-with-calendar-picture-id1092571024?k=20&m=1092571024&s=612x612&w=0&h=dz6l5jjYZC0lU2dUkqu5g5_0XtY3xnHs57mJDNlvJSk=",
//     "title":"my title",
//     "github":"https://github.com",
//     "demo":"https://facebook.com"},

//    { "id":4,
//     "image":"https://media.istockphoto.com/photos/to-do-list-in-notebook-with-calendar-picture-id1092571024?k=20&m=1092571024&s=612x612&w=0&h=dz6l5jjYZC0lU2dUkqu5g5_0XtY3xnHs57mJDNlvJSk=",
//     "title":"my title",
//     "github":"https://github.com",
//     "demo":"https://facebook.com"},

//    { "id":5,
//     "image":"https://media.istockphoto.com/photos/to-do-list-in-notebook-with-calendar-picture-id1092571024?k=20&m=1092571024&s=612x612&w=0&h=dz6l5jjYZC0lU2dUkqu5g5_0XtY3xnHs57mJDNlvJSk=",
//     "title":"my title",
//     "github":"https://github.com",
//     "demo":"https://facebook.com"},

//    { "id":6,
//     "image":"https://media.istockphoto.com/photos/to-do-list-in-notebook-with-calendar-picture-id1092571024?k=20&m=1092571024&s=612x612&w=0&h=dz6l5jjYZC0lU2dUkqu5g5_0XtY3xnHs57mJDNlvJSk=",
//     "title":"my title",
//     "github":"https://github.com",
//     "demo":"https://facebook.com"}
