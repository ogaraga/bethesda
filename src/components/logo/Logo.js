import React from 'react'
import { Link } from 'react-router-dom';
import bethesdaLogo from './images/LOGO TRAVELS.jpeg';
import styles from './Logo.module.css';
function Logo() {
  return (
    <div className={styles.logo} >
        <Link to= '/'>
        <img className={styles.image1} src={bethesdaLogo} alt='Bethesda Logo'/>
        </Link>
    </div>
  )
}

export default Logo;