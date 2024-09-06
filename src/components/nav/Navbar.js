import React, { useState } from 'react'
import styles from './Navbar.module.css';

function Navbar() {
    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(null);
    // const [ul, setUl] = useState(true);

    
    const handleClickSpan1 = () => {
        setOpen(!open)
        setClose(!close)
        document.querySelector('ul').style.display = 'block'
        // setUl(!ul);
    }
    const handleClickSpan2 = () => {
        setClose(!close)
        setOpen(!open)
        document.querySelector('ul').style.display = 'none'
        // setUl(!ul)
    }

    return (
        <>
        <div className={styles.navbar} >
            {<ul>
                <li>home</li>
                <li>about us</li>
                <li>services</li>
                <li>blogs</li>
                <li>Contact us</li>
            </ul> }
        </div>
        <div className={styles.toggle}>
        {open &&<span className={styles.span1} onClick={handleClickSpan1} >+</span>}
        {close && <span className={styles.span2} onClick={handleClickSpan2}>X</span>
        }
    </div>
    </>
    )
}

export default Navbar;