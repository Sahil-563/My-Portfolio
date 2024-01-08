import './NavBarStyles.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars , FaTimes,FaLinkedin,FaGithub} from 'react-icons/fa';



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
                    <h1>Sahil</h1>
                </Link>
                <ul className='social-media-links'>
                    
                    <li><Link to="https://linkedin.com/in/sahil-bharadwaj"><FaLinkedin size={40} style={{ color: "#fff", marginRight: '1rem' }} /></Link></li>
                    <li><Link to='https://github.com/Sahil-563'><FaGithub size={40} style={{ color: "#fff", marginRight: '1rem' }} /></Link></li>
                </ul>
                <ul className={click ?('nav-menu active'):('nav-menu')}>
                    <li><Link to='/' >
                        Home
                    </Link></li>
                    <li><Link to='/About' >
                        About
                    </Link></li>
                    <li><Link to='/Contact' >
                        Contact
                    </Link></li>
                    <li><Link to='/Project' >
                        Projects
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