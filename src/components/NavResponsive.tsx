import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import styles from '../styles/NavResponsive.module.css'
import { TfiClose } from "react-icons/tfi";
import Image from 'next/image'
import LiInLogo from '../assets/LI-In-Bug.png'
import GitHLogo from '../assets/github-mark.png'
import Link from 'next/link'
import { close } from 'inspector';
import { useRouter } from 'next/navigation';






interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavResponsive: React.FC<Props> = ({ isOpen, setIsOpen }) => {

    const closeNav = () => {
        setIsOpen(false)
    }




    return (
        <div className={styles.menu_icon_wrapper}>
            <BiMenuAltRight className={styles.menu_icon} size='2em'
                onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen ? <div className={styles.nav_drop_down}>
                <div className={styles.close_btn}>

                    <div className={styles.social_btn_wrapper}>
                        <Image src={LiInLogo} alt="Linkedin Logo" className={styles.social_logos} />
                        <Image src={GitHLogo} alt="Github Logo" className={styles.social_logos} />
                    </div>
                    <TfiClose onClick={() => setIsOpen(!isOpen)} size='2em' />
                </div>

                <div className={styles.mobile_nav_wrapper}>
                    <ul className={styles.mobile_nav_ul}>
                        <li className={styles.mobile_nav_li} >
                            <Link href="/" onClick={closeNav}>HOME</Link>
                        </li>
                        <li className={styles.mobile_nav_li} >
                            <Link href="/portfolio" onClick={closeNav}>PORTFOLIO</Link>
                        </li>
                        <li className={styles.mobile_nav_li} >
                            <Link href="/" onClick={closeNav}>CONTACT</Link>
                        </li>
                    </ul>
                </div>


            </div> : ''}
        </div>
    )
}


export default NavResponsive