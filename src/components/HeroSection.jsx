import './HeroSectionStyles.css';
import HeroImg from '../assets/fii.avif'
import Project from '../routes/Project';
import{Link} from 'react-router-dom';

const HeroSection = (props) => {
 
    return (
        <>
            <div className='hero'>
                <div className='mask'>
                    <img className='intro-img' src={HeroImg} alt="Intro-Img"></img>
                </div>
                <div className='content'>
                    <p>Hello ,My name is Sahil</p>
                    <h1>A Full Stack developers</h1>
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