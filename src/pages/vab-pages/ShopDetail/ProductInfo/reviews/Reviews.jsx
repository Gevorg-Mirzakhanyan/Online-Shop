import userImg from "../../../../../assets/img/user.jpg"
import "./Reviews.scss"
const Reviews = () => {
    return(
        <div className="reviews">
            <div>
                <h2>1 review for "Product Name"</h2>
                <div className="reviews-user">
                    <img src={userImg} alt="/" />
                    <div>
                        <h5>John Doe - 01 Jan 2045</h5>
                        <span className="prod-icon">{[...Array(5)].map(star => {
                            return <i className="icon-star" />
                        })}</span>
                        <p className="reviews-description">Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. 
                            Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Leave a review</h2>
                <span>Your email address will not be published. Required fields are marked *</span>
                <h4>Your Rating * :
                    <span className="prod-icon">{[...Array(5)].map(star => {
                        return <i className="icon-rateStar" />
                    })}</span>
                </h4>
            </div>
            
        </div>
    )
}

export default Reviews;