import './FooterStyles.css'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-container'>
                    <div className='left'>
                        <div className='location'>
                            <h4>
                                <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                                Palampur , Himachal Pradesh , India
                            </h4>
                            

                        </div>
                        <div className='phone'>
                            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} /> +91 11111111111</h4>
                        </div>
                        <div className='email'>
                            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} /></h4>
                            <p><h4>
                            sahil.bz.2002@gmail.com</h4></p>
                        </div>
                    </div>
                    <div className='right'>
                        <h4 className='text-align'>About Me</h4>
                        <p>This is me Sahil. I am a UnderGrad Student. I enjoy building new projects and doing open source contibutions.</p>
                        <div className="social ">
                        <h4 className='text-align'>Connect With Me</h4>
                        <div className='flex'>
                        <Link to="https://github.com/Sahil-563"><FaGithub size={40} style={{ color: "#fff", marginRight: '1rem' }} /></Link>
                        <Link to='https://linkedin.com/in/sahil-bharadwaj'><FaLinkedin size={40} style={{ color: "#fff", marginRight: '1rem' }} /></Link>
                        
                        <FaInstagram size={40} style={{ color: "#fff", marginRight: '1rem' }} /></div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}
export default Footer