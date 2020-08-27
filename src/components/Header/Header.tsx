import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    const[tab,setTab] = useState('About')

    return(
        <div className='header'>
            <Link to='/portfolio/about' style={{
                    textDecoration: 'none'
                }}> 
                <h1 onClick={() => setTab('About')}>James R Crews</h1>
            </Link>
            <div className='header__tabs'>
                <Link to='/portfolio/about' style={{
                    textDecoration: 'none'
                }}> 
                    <div className={['header__tabs--tab', 
                        `${tab === 'About' ? 'header__tabs--active' : ''}`
                        ].join(' ')}
                        onClick={() => setTab('About')}>
                        <h1>About</h1>
                    </div>
                </Link>
                <Link to='/portfolio/projects' style={{
                    textDecoration: 'none'
                }}>
                    <div className={['header__tabs--tab', 
                        `${tab === 'Projects' ? 'header__tabs--active' : ''}`
                        ].join(' ')}
                        onClick={() => setTab('Projects')}>
                        <h1>Projects</h1>
                    </div>
                </Link>
                <Link to='/portfolio/contact' style={{
                    textDecoration: 'none'
                }}>
                    <div className={['header__tabs--tab', 
                        `${tab === 'Contact' ? 'header__tabs--active' : ''}`
                        ].join(' ')}
                        onClick={() => setTab('Contact')}>
                        <h1>Contact</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header