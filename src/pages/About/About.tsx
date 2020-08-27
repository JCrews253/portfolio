import React from 'react'
import './About.css'
import profilePicture from '../../images/profile-picture.jpg'

const About = () => {
    return(
        <div className='about'>
            <img className='about__profilePicture' src={profilePicture}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima, asperiores est quod vitae saepe nostrum nam aliquam quae adipisci voluptatum eum libero nulla, perferendis, eos esse a quaerat exercitationem!</p>
        </div>
    )
}

export default About