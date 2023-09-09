import './NavBarStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const NavBar = () => {
    return (
        <>
            <div className='header'>
                <Link to='/'>
                    <h1>Portfolio</h1>
                </Link>
                <ul className='nav-menu'>
                    <li><Link to='/'>
                        Home
                    </Link></li>
                    <li><Link to='/About'>
                        About
                    </Link></li>
                    <li><Link to='/Contact'>
                    Contact
                </Link></li>
                    <li><Link to='/Project'>
                    Project
                </Link></li>
                </ul>
                
            <div><FaBars size={30} style={{color:'white'}}/></div>
                
                
            </div>
        </>
    )
}
export default NavBar