import { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../components/Layout'
import '../styles/global.css'

const _app = ({ Component }) => {

    return (
        <div className="App">
            <Layout>
                <ParallaxProvider>
                    <Component />
                </ParallaxProvider>
            </Layout>

        </div>
    )
}

export default _app







