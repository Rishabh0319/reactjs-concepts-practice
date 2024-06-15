import React from 'react';
import styles from './Contacts.module.css';
import {getImageUrl} from '../../utils';

const Contacts = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
           <h2>Contact</h2>
           <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
           <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:rishabhtripathi0319@gmail.com" target='_blank'>Gmail</a>
           </li>
           <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/rishabh-tripathi-964b2b1b7/" target='_blank'>Linkedin</a>
           </li>
           <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Email icon" />
            <a href="https://github.com/Rishabh0319" target='_blank'>Github</a>
           </li>
        </ul>
    </footer>
  )
}

export default Contacts