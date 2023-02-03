import React from 'react'
import Link from 'next/link'
import { NavResponsive } from './NavResponsive'
import styles from '../styles/Nav.module.css'


const NavBar = () => {
    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_ul}>
                <li>
                    <Link href="/">HOME</Link>
                    <Link href="/">PORTFOLIO</Link>
                    <Link href="/">CONTACT</Link>
                </li>
            </ul>
            <NavResponsive />
        </nav>
    )
}

export default NavBar
