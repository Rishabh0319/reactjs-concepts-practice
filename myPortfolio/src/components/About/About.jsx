import React from 'react';
import {getImageUrl} from './../../utils.js';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/mypic1.png")} className={styles.aboutImage} alt="Me sitting with a laptop" />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I'm frontend developer with experience in building responsive and optimized websites </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I have experience developing fast and optimized backend systems and API's</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="about icon" />
                    <div>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and created design system as well</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About