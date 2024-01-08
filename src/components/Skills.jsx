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
import git from '../assets/git.webp'
import github from '../assets/GitHub-Mark.png'
import postman from '../assets/postman.svg'
import { useState } from 'react'
import {useTypewriter} from 'react-simple-typewriter';


const Skills = () => {
    const [languageName ,setLanguageName] =useState('');
    const handlehover=(name)=>{
        setLanguageName(name)
    }
    const[text]=useTypewriter({
        words:['y Skills:'],
        loop:{}
    })
    const[text1]=useTypewriter({
        words:['over on technology to know more....'],
        loop:{}
    })
    return (
        <>
            <div className='skills-section'>
                <h1 className='Skills-heading'>M{text}</h1>
                <p style={{color:'rgb(248, 217, 15)'}}>H{text1}</p>
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
                    
                    <li onMouseOver={()=>{handlehover('Nodejs')}} >
                        <img style={{ height: '80px' }} src={nodejs} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('MongoDB')}} >
                        <img style={{ height: '100px' }} src={mongoDb} alt="" />
                    </li>
                    <li onMouseOver={()=>{handlehover('Python')}} >
                        <img style={{ height: '80px' }} src={python} alt="" />
                        
                    </li>
                    <li  onMouseOver={()=>{handlehover('ExpressJS')}}>
                        <img style={{ height: '80px' }} src={express} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Java')}}>
                        <img style={{ height: '100px',
                    width: '70px' }} src={Java} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Vite')}}>
                        <img style={{ height: '80px' }} src={vite} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Git')}}>
                        <img style={{ height: '80px' }} src={git} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Github')}}>
                        <img style={{ height: '80px' }} src={github} alt="" />
                    </li>
                    <li  onMouseOver={()=>{handlehover('Postman')}}>
                        <img style={{ height: '80px' }} src={postman} alt="" />
                    </li>

                </ul>
                
            </div>
        </>
    )
}
export default Skills