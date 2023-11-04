import "./Footer.scss";
import payment from "../../assets/img/payments.png"
const Footer = () => {
    return(
        <div  className="footer">
            <div className="footer-description">
                <div className="footer-first-section">
                    <h4 className="footer-header">GET IN TOUCH</h4>
                    <p className="footer-text">
                        No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. 
                        Rebum tempor no vero est magna amet no
                    </p>
                    <p className="footer-info"><i className="icon-location icon-footer" />123 Street, New York, USA</p>
                    <p className="footer-info"><i className="icon-email icon-footer" />info@example.com</p>
                    <p className="footer-info"><i className="icon-call icon-footer" />+012 345 67890</p>
                </div>
                <div className="footer-second-section">
                    <h4 className="footer-header">NEWSLETTER</h4>
                    <p className="footer-text">
                        Duo stet tempor ipsum sit amet magna ipsum tempor est
                    </p>
                    <input 
                        className="footer-input" 
                        placeholder="Your Email Address"
                        type="email"
                    />
                    <button className="footer-btn">Sign Up</button>
                    <h6 className="footer-header">FOLLOW US</h6>
                    <div>
                        <a href="/">
                            <i className="icon-facebook   icon-social" />
                        </a>
                        <a href="/">
                            <i className="icon-instagram icon-social" />
                        </a>
                        <a href="/">
                            <i className="icon-linkedin icon-social" />
                        </a>
                        <a href="/">
                            <i className="icon-twitter icon-social" />
                        </a>
                           
                       
                    </div>
                </div>
            </div>
            <div className="payment">
                <img src={payment} alt="/" />
            </div>
        </div>
    )
}

export default Footer;