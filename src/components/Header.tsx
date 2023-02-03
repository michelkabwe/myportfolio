import React from 'react'
import styles from '../styles/Header.module.css'
import NavBar from './NavBar'



const header = () => {
    return (
        <header className={styles.header}>
           <span className={styles.logo}>Michel Kabwe</span>
           <NavBar />
        </header>
    )
}

export default header
