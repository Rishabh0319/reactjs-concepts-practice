import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
       <div className={styles.content}>
          <h1 className={styles.title}>Hello, I'm Rishabh</h1>
          <p className={styles.description}>I am a Full Stack Web Developer with strong skills in frontend development using React, where I can create responsive, pixel-perfect designs. In addition, I possess a good understanding of backend development with Node.js and Express.js, and can handle basic backend tasks and create APIs.</p>
          <a href="mailto:rishabhtripathi0319@gmail.com" className={styles.contactBtn}>Contact Me</a>
       </div>
       <img src={getImageUrl("profile-pic.png")} className={styles.heroImg} alt="Hero" />
       <div className={styles.topBlur}/>
       <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero