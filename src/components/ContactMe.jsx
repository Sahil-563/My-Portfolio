import './ContactMeStyles.css'
import React from 'react';
import { useNavigate } from 'react-router-dom'
const ContactMe=()=>{
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
       e.preventDefault();
       
       alert('Congratulations! We will catch soon');
       navigate("/");
  
    }
    return(
    
        <>
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input required type='text'></input>
                <label>Email</label>
                <input required type='text'></input>
                <label>Subject</label>
                <input required type='text'></input>
                <label>Message</label>
                <textarea required rows='6' placeholder='Type your message here'/>
                <button className='btn' onclick={handleSubmit}>Submit</button>
                {/* <input className='btn' type="submit" /> */}
            </form>
        </div>
        </>
    )
}
export default ContactMe