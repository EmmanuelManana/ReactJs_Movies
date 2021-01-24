import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <h1>Welcome To Awesome movies</h1>
            <Link to="/home">
                <button>Browse Movies</button>
            </Link>

        </div>
    )
}

export default LandingPage
