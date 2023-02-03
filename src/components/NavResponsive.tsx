import React from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import styles from '../styles/NavResponsive.module.css'





export const NavResponsive = () => {
    return (
        <div className={styles.menu_icon_wrapper}>
            <BiMenuAltRight className={styles.menu_icon} size='2em'
/>
        </div>
    )
}
