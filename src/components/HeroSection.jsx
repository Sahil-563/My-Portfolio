import './HeroSectionStyles.css';

import Project from '../routes/Project';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import video from '../assets/as.mp4'
import video1 from '../assets/v_v.mp4'

const HeroSection = (props) => {
    const [text] = useTypewriter({
        words: ['A Full Stack Developer', 'A Tech Enthusiast', 'An Open Source Contributor'],
        loop: {}
    })

    return (
        <>
            <div className='hero'>
                <div className='mask'>
                    <video className='intro-img' width="100%" height="100%" loop autoPlay muted>
                        <source src={video1} type="video/mp4"></source>
                    </video>
                </div>
                        <div className='content'>
                            <p>Hello ,My name is Sahil</p>
                            <span><h1>I'm <span style={{ color: 'rgb(255, 217, 15)' }}>{text}</span></h1></span>

                            <div>
                                <Link to="/project"
                                    className="btn">
                                    Projects
                                </Link>
                                <Link to="https://drive.google.com/file/d/1KvlYXv5y0L-3khSLgL7pe5uexgkmsj-B/view?usp=drive_link"
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