
import "./Contact.scss"
import ContactRegister from "./components/ContactRegister"
import Address from "./components/Address"
import Paragrafs from "../../../components/paragrafs/Paragrafs"
import "../../../components/paragrafs/Paragrafs.scss"





const Contacts = () => {
    return(
        <div className="contact">
            <div className="contact-page">
                <Paragrafs list={['Home/', 'Contact']} />
            </div>
            <h2 className="contact-title">
                <span className="title">CONTACT US</span>
            </h2>
            <div className="contact-info G-flex">
                <ContactRegister />
                <div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d195168.08508053457!2d44.4885671!3d40.1533904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sam!4v1694884739434!5m2!1sen!2sam" width="500" height="250" title="google-map"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  />
                    </div>
                    <Address />
                </div>
            </div>
        </div>
    )
}

export default Contacts