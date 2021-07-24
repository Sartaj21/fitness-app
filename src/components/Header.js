import React from 'react'
import './Header.css'
import Home from './home';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className = 'header'>
                <div class="left_logo">
                    <h2>Op Fitness</h2>
                </div>

                <div class ="main-header ">
                    <a href="."><p>Try</p></a>
                    <a href="."><p>Join</p></a>
                    <a href="."><p>Log In</p></a>
                    <Link to="/about">about</Link>
                </div>
            </div>
        </header>
    )
}


export default Header;
