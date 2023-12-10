import { useState } from "react";
import "./ContactRegister.scss"
import { addNotification } from "../../../../platform/api/notifications-api";

const ContactRegister = () => {
    const [contactForm, setContactForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleChangeContact = (e) => {
        setContactForm({...contactForm, [e.target.name]: e.target.value});
    };

    const handleClickContact = () => {
        addNotification(contactForm)
        setContactForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    return(
        <div className="contact-register">
            <div >
            <label>
                <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChangeContact}
                />
            </label>
            <label>
                <input 
                    type="email"
                    placeholder="Your Email"
                    className="contact-input"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChangeContact}
                />
            </label>
            <label>
                <input 
                    type="text"
                    placeholder="Subject"
                    className="contact-input"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChangeContact}
                />
            </label>
            <textarea 
                type="text"
                placeholder="Message"
                className="contact-input textarea"
                name="message"
                value={contactForm.message}
                onChange={handleChangeContact}
            />
            </div>
            <button onClick={handleClickContact} className="contact-btn">Send Message</button>

        </div>
    )
}

export default ContactRegister;