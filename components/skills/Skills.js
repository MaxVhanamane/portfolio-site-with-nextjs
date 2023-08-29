import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { BiChip, BiDesktop } from "react-icons/bi";
import { HiDatabase } from "react-icons/hi";
import styles from "./../../styles/Skills.module.css"

function Skills() {
  return (
    <section id="skills">
      <h5>What skills I Have</h5>
      <h2>My skills</h2>
      <div className={["container", styles.skills_container].join(" ")}>
        {/* Frontend Development  */}
        <div className={styles.skills_frontend}>
          <h3>Frontend Development</h3>
          <div className={styles.skills_content}>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>HTML</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>CSS</h4>
                
              </div>
            </article>

            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>Bootstrap</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>Tailwind CSS</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>ReactJs</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>React Query</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>Typescript</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiDesktop className={styles.skill_detail_icon} />
              <div>
                <h4>JavaScript</h4>
                
              </div>
            </article>
          
          </div>
        </div>
        {/* Backend Development  */}
        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className={styles.skills_content}>
            <article className={styles.skill_detail}>
              <IoCodeSlash className={styles.skill_detail_icon} />
              <div>
                <h4>Python</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <IoCodeSlash className={styles.skill_detail_icon} />
              <div>
                <h4>Express.js</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <IoCodeSlash className={styles.skill_detail_icon} />
              <div>
                <h4>Django</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <IoCodeSlash className={styles.skill_detail_icon} />
              <div>
                <h4>Flask</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <IoCodeSlash className={styles.skill_detail_icon} />
              <div>
                <h4>Next.js</h4>
                
              </div>
            </article>
          </div>
        </div>

        {/* Database */}
        <div className="skills_backend">
          <h3>Database</h3>
          <div className={styles.skills_content}>
            <article className={styles.skill_detail}>
              <HiDatabase className={styles.skill_detail_icon} />
              <div>
                <h4>SQL</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <HiDatabase className={styles.skill_detail_icon} />
              <div>
                <h4>MongoDB</h4>
                
              </div>
            </article>
          </div>
        </div>
        {/* Other Technologies */}
        <div className="skills_backend">
          <h3>Other Technologies</h3>
          <div className={styles.skills_content}>
            <article className={styles.skill_detail}>
              <BiChip className={styles.skill_detail_icon} />
              <div>
                <h4>Git & Github</h4>
                
              </div>
            </article>
            <article className={styles.skill_detail}>
              <BiChip className={styles.skill_detail_icon} />
              <div>
                <h4>API&apos;s</h4>
                
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
