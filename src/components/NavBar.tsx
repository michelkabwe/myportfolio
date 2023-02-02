import React from 'react'
import Link from 'next/link'


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">HOME</Link>
                    <Link href="/">PORTFOLIO</Link>
                    <Link href="/">CONTACT</Link>
                </li>
            </ul>
           
            
        </nav>
    )
}

export default NavBar
