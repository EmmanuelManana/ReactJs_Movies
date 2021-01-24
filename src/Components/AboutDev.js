import React from 'react'
import '../Styles/AboutDev.css';

const AboutDev = () => {
    return (
        <div className="aboutDev">
            <img
                className="aboutDev_image"
                src="https://media-exp1.licdn.com/dms/image/C4D35AQEhdhhK4HUT7Q/profile-framedphoto-shrink_200_200/0/1609757945309?e=1611561600&v=beta&t=GZrgnM5toT1eGpk-Z8pB7mWNJjvTgYqxrX-FmKcTUzs" alt=""
            />

            <div className="aboutDev__info">
                <h1>Developer information</h1>
                <h3>Name: Emmanuel</h3>
                <h3>Surname: Manana</h3>
                <h3>Email:<a href="mailto:emanana354@gmail.com"> emanana354@gmail.com</a></h3>
                <h3>Phone: 062 354 2024</h3>
                <h3>Phone: 067 283 4101</h3>
            </div>
        </div>
    )
}

export default AboutDev
