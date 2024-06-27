import React from 'react';
import skills from '../../data/skills';
import certification from '../../data/certification.json';
import { getImageUrl } from '../../utils';
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id='experiance' className={styles.container}>
      <h2 className={styles.title}>Skills & Certification</h2>
      <div className={styles.content}>
        <div  className={styles.skills}>
            {
                skills.map((skill, id)=>{
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                })
            }
        </div>
        <ul className={styles.history}>
            {
                certification.map((certificateItem,id)=>(
                  <li key={id} className={styles.historyItem}>
                      <img src={certificateItem.imageSrc} alt={certificateItem.title} />
                      <div className={styles.historyItemDetailes}>
                        <h3>{certificateItem.title},{certificateItem.organisation}</h3>
                        <p>{certificateItem.endDate}</p>
                        <ul>{certificateItem.experiences.map((experience,id)=>(
                            <li key={id}>{experience}</li>
                        ))}</ul>
                        <a className={styles.certificateLink} href={certificateItem['certificate-link']} target='_blank' alt="show certificat">Show Certificate</a>
                     </div>
                   </li>
                ))
            }
        </ul>
      </div>
    </section>
  )
}

export default Experience