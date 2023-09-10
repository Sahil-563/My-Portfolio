import './HeroSection2Styles.css'
import Hero3 from '../assets/Hero3.avif';
const HeroSection2 = (props) => {
    return (
        <>
            <div className="hero-img">
                <img src={Hero3} alt="hero-img" />
                <div className="heading">
                    <h1>{props.heading}</h1>
                    <p>{props.text}</p>
                </div>
            </div></>
    )
}
export default HeroSection2