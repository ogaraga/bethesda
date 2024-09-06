import React from 'react';
import styles from './Header.module.css';
import Logo from '../logo/Logo';
import Navbar from '../nav/Navbar';

function Header() {
  return (
    <div className= {styles.header}>
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Header;