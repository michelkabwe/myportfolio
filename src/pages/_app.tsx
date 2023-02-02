import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'

const _app = ({ Component }) => {
    return (
        <div className="App">
            <Layout>
                <Component />
            </Layout>
            
        </div>
    )
}

export default _app







