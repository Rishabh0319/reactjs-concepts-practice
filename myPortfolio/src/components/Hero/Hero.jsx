import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
       <div className={styles.content}>
          <h1 className={styles.title}>Hello, I'm Rishabh</h1>
          <p className={styles.description}>I'm fullstack Developer with 1 year of Experience of React.js, Node.js, Express.js and mongoDB. Reach out if you'd like to learn more</p>
          <a href="mailto:rishabhtripathi0319@gmail.com" className={styles.contactBtn}>Contact Me</a>
       </div>
       <img src={getImageUrl("profile-pic.png")} className={styles.heroImg} alt="Hero" />
       <div className={styles.topBlur}/>
       <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero