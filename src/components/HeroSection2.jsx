import './HeroSection2Styles.css'

import video1 from '../assets/v_v.mp4'
const HeroSection2 = (props) => {
    return (
        <>
            <div className="hero-img">
            <video className='intro-img' width="100%" height="100%" loop autoPlay muted>
                        <source src={video1} type="video/mp4"></source>
                    </video>
                <div className="heading">
                    <h1>{props.heading}</h1>
                    <p>{props.text}</p>
                </div>
            </div></>
    )
}
export default HeroSection2