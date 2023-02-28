import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LiInLogo from '../assets/LI-In-Bug.png'
import Mee from '../assets/michel_kabwe.png'
import GitHLogo from '../assets/github-mark.png'
import { FiBox } from "react-icons/fi";
import Router from 'next/router';
import ScrollDownBtn from '../components/ScrollDownBtn'
import Link from 'next/link'


interface Props {
  showBtn: boolean
}


const index: React.FC<Props> = () => {

  const [showBtn, setShowBtn] = useState(false)

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setShowBtn(true)
    } else {
      setShowBtn(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  const handleClick = () => {
    Router.push('/portfolio');
  };


  return (
    <div className={styles.home_container}>
      <div className={styles.section}>
        <div className={styles.col_img}>
      <Image src={Mee} className={styles.me} alt="me" />
      </div>
      <div className={styles.col_text}>
        <h1 className={styles.home_title}>HI, I AM A FREELANCE JUNIOR FRONTEND DEVELOPER, UX DESIGNER</h1>
        <p className={styles.p_home}>with +3 years of experience as an IT-consultant among some of Sweden’s most renowned companies. Service-minded and self-driven. I am seeking to advance my career by growing with your company and contributing with my skills as a developer and my never say die attitude".</p>
        <div className={styles.btn_wrapper_hero}>
          <button className={styles.purple_btn} onClick={handleClick}
          >MY PORTFOLIO</button>
          </div>

          <div className={styles.social_btn_wrapper_hero}>
            <Image src={LiInLogo} alt="Linkedin Logo" className={styles.social_logos_hero} />
            <Image src={GitHLogo} alt="Github Logo" className={styles.social_logos_hero} />
          </div>

        </div>



        <div className={styles.btn_down_wrapper}>
          <Link href="#section-2">
            {showBtn && <ScrollDownBtn onClick={handleButtonClick} />}
          </Link>
        </div>



      </div>
      <div className={styles.section_techstack} id="section-2" >
        <h1 className={styles.tech_stack_heading}>TECH STACK <FiBox /> </h1>
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

