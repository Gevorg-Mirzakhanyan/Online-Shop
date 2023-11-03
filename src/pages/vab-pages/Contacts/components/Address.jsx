import "./Address.scss"
const Address = () => {
    return(
        <div className="contact-address">
            <p className="text-info"><i className="icon-location icon-contact" />123 Street, New York, USA</p>
            <p className="text-info"><i className="icon-mail icon-contact" />info@example.com</p>
            <p className="text-info"><i className="icon-call icon-contact" />+012 345 67890</p>
        </div>
    )
}

export default Address