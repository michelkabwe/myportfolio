import React from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'




const NavBar: React.FC = () => {

    return (
        <nav className={styles.nav_wrapper}>
            <ul className={styles.nav_ul}>
                <li>
                    <Link href="/">HOME</Link>
                    <Link href="/portfolio">PORTFOLIO</Link>
                    <Link href="/">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
