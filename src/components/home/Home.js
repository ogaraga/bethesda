import React from 'react'
import styles from './Home.module.css'
import plane from '../logo/images/plan1.jpg'
import Footer from '../footer/Footer'
function Home() {

    return (
        <>
            <div className={styles.home} >
                <h2 className={styles.h2} >Welcome to Bethesda travels and tours</h2>

                <h2 className={styles.h3}>Our vision is the binding driver for our timely delivery</h2>
                <hr></hr>
                <img className={styles.image2} src={plane} alt='Plane1' ></img>
            </div>
            <div>
                <p className={styles.p1} >We offer both local and international travel/visa  packages that fit into your desires.</p>
                <p className={styles.p2}>Get your luggage and lets get into the plane</p>
            </div>
            <div className= {styles.media} >
                <text> You can chat with us with just a click on any of our social media accounts:</text>
                <div className={styles.myh4} >
                <h4 className={styles.h4}> Facebook    
                </h4>
                <h4 className={styles.h4}> LinkedIn    
                </h4>
                <h4 className={styles.h4}> Twitter    
                </h4>
                <h4 className={styles.h4}> Instagram    
                </h4>
                </div>
                
            </div>

            <Footer />
        </>
    )
}

export default Home