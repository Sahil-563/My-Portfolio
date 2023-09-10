import './NavBarStyles.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars , FaTimes} from 'react-icons/fa';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick=(()=>{
        return setClick(!click);
    })
    const[color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener('scroll',changeColor)
    return (
        <>
            <div className={color?('header header-bg'):('header')}>
                <Link to='/'>
                    <h1>Portfolio</h1>
                </Link>
                <ul className={click ?('nav-menu active'):('nav-menu')}>
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

                <div className='hamsburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: 'white' }} />):<FaBars size={30} style={{ color: 'white' }} />}
                    
                    
                </div>


            </div>
        </>
    )
}
export default NavBar