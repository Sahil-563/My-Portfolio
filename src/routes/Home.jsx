import { useNavigate } from 'react-router-dom'
import HeroSection from "../components/HeroSection"
import Projects from "../components/Porjects"
import AboutMe from "../components/AboutMe"
import ContactMe from "../components/ContactMe"
import Skills from '../components/Skills';


const Home=()=>{
    return(
        <div>
            <HeroSection />
            <Skills/>
            <Projects/>
            <AboutMe/>
            
            <ContactMe/>
           
        </div>
    )
}
export default Home