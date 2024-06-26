import React, { useState } from 'react'
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';

const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href='#' className={styles.title}>Rishabh's Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={ menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png") } onClick={()=>setMenuOpen(!menuOpen)} alt="menu" />
            <ul onClick={()=>setMenuOpen(false)} className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#experiance">Skills & Certification</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar