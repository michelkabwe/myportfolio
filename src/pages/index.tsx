import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LiInLogo from '../assets/LI-In-Bug.png'


interface Data {
  name: string;
  
}

const data: Data[] = [
  
  { name: 'React.js'},
  { name: 'React Native'},
  { name: 'Vue.js'},
  { name: 'Javascript'},
  { name: 'Node.js'},
  { name: 'Firebase'},
  { name: 'HTML5'},
  { name: 'CSS'},
  { name: 'SASS'},
  { name: 'GitHub'},
  { name: 'REST API'},
  { name: 'Bootstrap'},
  { name: 'Material UI'},
  { name: 'Adobe Experience Manager'},
  { name: 'Wordpress'},

]


const index = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.section}>
        <h1 className={styles.home_title}>HI, I AM A FREELANCE JUNIOR FRONTEND DEVELOPER, UX DESIGNER</h1>
        <p>with +3 years of experience as an IT-consultant among some of Sweden’s most renowned companies. Service-minded and self-driven. I am seeking to advance my career by growing with your company and contributing with my skills as a developer and my never say die attitude".</p>
        <button className={styles.purple_btn}>MY PORTFOLIO</button>
      </div>
      <div className={styles.social_btn_wrapper}>
        <Image src={LiInLogo} alt="Linkedin Logo" className={styles.Li_In__logo } />
      </div>
      <div className={styles.section_techstack}>
        <h1>TECH STACK</h1>
        <p className={styles.tech_stack_title}>Programming languages / Framesworks / Libraries / CMS</p>

        <table>
      <thead>
        <tr className={styles.table_row}>
        </tr>
      </thead>
      <tbody>

          <tr>
            <td className={styles.table_data}>React.js</td>
            <td className={styles.table_data}>HTML5</td>
            <td className={styles.table_data}>Bootstrap</td>
          </tr>
          <tr>
            <td className={styles.table_data}>React Native</td>
            <td className={styles.table_data}>CSS</td>
            <td className={styles.table_data}>Material UI</td>
          </tr>
          <tr>
            <td className={styles.table_data}>Vue.js</td>
            <td className={styles.table_data}>SASS</td>
            <td className={styles.table_data}>Adobe Experience Manager</td>

          </tr>
          <tr>
            <td className={styles.table_data}>JavaScript</td>
            <td className={styles.table_data}>gitHub</td>
            <td className={styles.table_data}>Wordpress</td>
          </tr>
          <tr>
            <td className={styles.table_data}>Node.js</td>
            <td className={styles.table_data}>REST API</td>
          </tr>
          <tr>
            <td className={styles.table_data}>Firebase</td>
            <td className={styles.table_data}>Firebase</td>
          </tr>
          <tr>
            <td className={styles.table_data}>React.js</td>
          </tr>
   
      </tbody>
    </table>

      </div>
    </div>
  )
}

export default index

