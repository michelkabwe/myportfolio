import React from 'react'
import { useRouter } from 'next/router'

function portfolioDetails() {

    const router = useRouter()
    const portfolioid = router.query.portfolioid
    return (
        <div>
            <h1>portfolio details: {portfolioid}</h1>
            
        </div>
    )
}

export default portfolioDetails
