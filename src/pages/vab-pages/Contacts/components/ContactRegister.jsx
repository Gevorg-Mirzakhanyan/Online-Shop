import "./ContactRegister.scss"

const ContactRegister = () => {
    return(
        <div className="contact-register">
            <div >
            <label>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                />
            </label>
            <label>
                <input 
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                />
            </label>
            <label>
                <input 
                    type="text"
                    placeholder="Subject"
                    className="contact-input"
                />
            </label>
            <textarea 
                placeholder="Message"
                className="contact-input textarea"
            />
            </div>
            <button className="contact-btn">Send Message</button>
        </div>
    )
}

export default ContactRegister;