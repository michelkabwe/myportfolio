import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <main>
            <Head>
            <title>My portfolio</title>
            </Head>
            <Header />
            <main>{children}
            </main>
            <Footer />
        </main>
    )
}

export default Layout
