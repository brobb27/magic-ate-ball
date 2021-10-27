import React from 'react'
import { Link } from 'react-router-dom'
import { GiEightBall } from 'react-icons/gi'

function Navbar() {
    return (
        <div id="navbar" >
            <Link id="navbarTitle" to='/'>Magic Ate Ball <GiEightBall /></Link>
            <div id="navbarLinks">
                <Link className="navbarLink" to='/'>HOME</Link>
                <Link className="navbarLink" to='/favorites'>MY FAVORITES</Link>
                <Link className="navbarLink" to='/about'>ABOUT</Link>
            </div>
        </div>
    )
}

export default Navbar