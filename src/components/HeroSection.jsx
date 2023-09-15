import './HeroSectionStyles.css';
import HeroImg from '../assets/fii.avif'
import Project from '../routes/Project';
import{Link} from 'react-router-dom';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

const HeroSection = (props) => {
    const[text]=useTypewriter({
        words:['A Full Stack Developer','A Tech Enthusiast','An Open Source Contributor'],
        loop:{}
    })
 
    return (
        <>
            <div className='hero'>
                <div className='mask'>
                    <img className='intro-img' src={HeroImg} alt="Intro-Img"></img>
                </div>
                <div className='content'>
                    <p>Hello ,My name is Sahil</p>
                    <span><h1>I'm {text}</h1></span>
                    
                    <div>
                        <Link to="/project"
                            className="btn">
                            Projects
                        </Link>
                        <Link to=""
                            className="btn btn-light">
                            Resume
                        </Link>
                    </div>

                </div>
            </div>
            
        </>
    )
}
export default HeroSection