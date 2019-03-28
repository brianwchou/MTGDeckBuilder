import React from 'react';
import "./navbar.css"

function Navbar () {
    return (
        <nav>
            <ul className = "nav">
                <li className = "horizontal"><a className = "changeColor" href="Home">Home</a></li>
            </ul>
        </nav>
    )
}

export default Navbar