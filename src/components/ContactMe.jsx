import './ContactMeStyles.css'
import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'
const ContactMe = () => {
    const form = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o8xjf3e', 'template_ttp6vtt', form.current, '2gIwWgQWrKRaLs0R4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        alert('Congratulations! We will catch up soon');
        navigate("/");

    }
    return (

        <>
            <div className='Form'>
            <h1 style={{textAlign:'center',paddingTop:'32px'}}>Contact Me</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <label>Your Name</label>
                    <input required type='text' name='from_name'></input>
                    <label>Email</label>
                    <input required type='email' name='from_email'></input>
                    <label>Subject</label>
                    <input required type='text' name='subject'></input>
                    <label>Message</label>
                    <textarea required rows='6' placeholder='Type your message here' name='message' />
                    <button className='btn' onclick={handleSubmit}>Submit</button>
                    {/* <input className='btn' type="submit" /> */}
                </form>
            </div>
        </>
    )
}
export default ContactMe