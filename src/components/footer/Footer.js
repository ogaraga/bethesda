import React from 'react'
import styles from './Footer.module.css'
function Footer() {
    const dates = new Date().getFullYear()
  return (
    <div className={styles.footer} >
        <p>This website is under intl copyRights @ {dates} </p>
    </div>
  )
}

export default Footer