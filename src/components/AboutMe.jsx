import './AboutMeStyles.css'
import {Link} from 'react-router-dom'
import img1 from '../assets/AboutmeImg1.avif'

const AboutMe=()=>{
    return(
        <>
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>Hi everyone, My name is Sahil.I am a full Stack Developer.I love to build webapps and to do open source contributions</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className='img'src={img1} alt="true" />
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutMe