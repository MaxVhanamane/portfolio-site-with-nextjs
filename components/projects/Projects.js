import React, { useRef, useState } from "react";
import styles from "./../../styles/Projects.module.css"
import mstyles from "./../../styles/Modal.module.css"
import Image from "next/image";
import allProject from "./allProjects.json";
import dynamic from 'next/dynamic';
import 'shaka-player/dist/controls.css';
function Projects() {

  const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });

  const [modal, setModal] = useState(false);
  const [vidLink, setVidLink] = useState("");
  const toggleModal = (vlink) => {
    setModal(!modal);
    setVidLink(vlink)
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
            <video className={styles.video} controls >
              <source src={vidLink} type="video/mp4" />
            </video>
           
              {/* <ShakaPlayer className={styles.video} autoPlay src={vidLink} /> */}
           
            <button className={mstyles.close_modal} onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}

      <section id="projects">
        <h5>My Recent Work</h5>
        <h2>Projects</h2>
        <div className={["container", styles.projects_container].join(" ")}>

          {allProject.map((data) => {

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

                <h3>{data.title}</h3>
               
                <div className={styles.project_item_cta}>
                  <a
                    href={data.github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  {data.demo ? <a
                    href={data.demo}
                    className="btn btn_primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Go Live
                  </a> : <button className="btn btn_primary" onClick={() => { toggleModal(data.video) }}>Watch Demo</button>

                  }
                </div>
  
              </article>
             
            );
          })}
        </div>
      </section></>
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
