import './SkillsStyles.css'
import html from '../assets/html.webp'
import css from '../assets/css.webp'
import js from '../assets/js.webp'
import express from '../assets/express.webp'
import nodejs from '../assets/nodejs.webp'
import mongoDb from '../assets/mongoDb.webp'
import react from '../assets/react.webp'
import python from '../assets/python.webp'
import Java from '../assets/Java.png'
import vite from '../assets/vite.webp'
import { useState } from 'react'


const Skills = () => {
    const [languageName ,setLanguageName] =useState('');
    const handlehover=(name)=>{
        setLanguageName(name)
    }
   
    return (
        <>
            <div className='skills-section'>
                <h1 className='Skills-heading'>Skills</h1>
                <div className='skills-names'><h2>{languageName}</h2></div>
                <ul className='sci'>
                    <li onMouseOver={()=>{handlehover('HTML')}}  >
                        <img style={{ height: '80px' }} src={html} alt="" />
                    </li>
                    <li onMouseOver={()=>{setLanguageName('CSS')}}  >
                        <img style={{ height: '80px' }} src={css} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('JavaScript')}} >
                        <img style={{ height: '80px' }} src={js} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('React')}} >
                        <img style={{ height: '80px' }} src={react} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('ExpressJS')}}>
                        <img style={{ height: '80px' }} src={express} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('HTML')}} >
                        <img style={{ height: '80px' }} src={nodejs} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('MongoDB')}} >
                        <img style={{ height: '100px' }} src={mongoDb} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('Python')}} >
                        <img style={{ height: '80px' }} src={python} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Java')}}>
                        <img style={{ height: '100px',
                    width: '70px' }} src={Java} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Vite')}}>
                        <img style={{ height: '80px' }} src={vite} alt="" />
                    </li>

                </ul>
                
            </div>
        </>
    )
}
export default Skills