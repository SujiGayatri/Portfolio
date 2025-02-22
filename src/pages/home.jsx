
import React from 'react';
import styles from '../css/home.module.css';
import avatar from '../assets/22A91A61F8.jpg'; 
function Home() {
    const name = "Full Stack Developer";
    const letteredName = name.split("").map((char, index) => (
        <span key={index} style={{ "--index": index }}>
          {char === " " ? "\u00A0" : char}
        </span>
      ));
  return (
    <>
    <div className={styles.container} style={{height:'100svh'}}>
      <div className={styles.card}>
      <div className={styles.Left}>
            <h1 className={styles.heading}>
              Hello, I&apos;m 
            </h1>
            <h1 className={styles.highlight}>SUJI GAYATRI KADIYALA</h1>
            <p className={styles.description}>
                <span  className={`${styles.heading} ${styles.nameReveal}`}>{letteredName}</span> 
              </p>
            </div>

        <div className={styles.Right}>
        <img src={avatar} alt="Andrea Avatar" className={styles.avatar} />
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
}

export default Home;
