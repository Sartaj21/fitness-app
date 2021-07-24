import React from 'react'
import './Header.css'
import About from './about';
import signUp from './sign-up';
import Login from './login';
import Try from './try';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className = 'header'>
                <div class="left_logo">
                    <h2>Op Fitness</h2>
                </div>

                <div class ="main-header ">
                    <Link to="/about">About</Link>
                    <Link to='/try'>Try</Link>
                    <Link to='/join'>Join</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}


export default Header;
