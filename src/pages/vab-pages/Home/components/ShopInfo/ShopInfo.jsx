import "./ShopInfo.scss"

const ShopInfo = () => {
    return(
        <div className="info-shop G-flex">
            <div className="info">
                <i className="icon-check info-icon" />
                <h5 className="info-text">Quality Product</h5>
            </div>
            <div className="info">
                <i className="icon-shipping info-icon" />
                <h5 className="info-text">Free Shipping</h5>
            </div>
            <div className="info">
                <i className="icon-sync info-icon" />
                <h5 className="info-text">14-Day Return</h5>
            </div>
            <div className="info">
                <i className="icon-phone info-icon"/>
                <h5 className="info-text">24/7 Support</h5>
            </div>
        </div>
    )
}

export default ShopInfo