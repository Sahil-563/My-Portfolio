import './ContactMeStyles.css'
const ContactMe=()=>{
    const handleSubmit=(e)=>{
       alert('Your message is sent')
    }
    return(
    
        <>
        <div className='Form'>
            <form onSubmit={handleSubmit}>
                <label>Your Name</label>
                <input type='text'></input>
                <label>Email</label>
                <input type='text'></input>
                <label>Subject</label>
                <input type='text'></input>
                <label>Message</label>
                <textarea rows='6' placeholder='Type your message here'/>
                <button className='btn' onclick={handleSubmit}>Submit</button>
                {/* <input className='btn' type="submit" /> */}
            </form>
        </div>
        </>
    )
}
export default ContactMe