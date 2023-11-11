import userImg from "../../../../../assets/img/user.jpg"
import "./Reviews.scss"
const Reviews = () => {
    return(
        <div className="reviews G-flex">
            <div>
                <h2 className="reviews-title">1 review for "Product Name"</h2>
                <div className="reviews-user G-flex">
                    <img className="reviews-user-img" src={userImg} alt="/" />
                    <div className="reviews-user-info G-flex-column">
                        <h4 className="reviews-user-info-title">John Doe - 01 Jan 2045</h4>
                        <span className="prod-icon">{[...Array(5)].map(star => {
                            return <i className="icon-star icon" />
                        })}</span>
                        <p className="reviews-description">Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. 
                            Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="review-leav G-flex-column">
                <h2 className="reviews-title">Leave a review</h2>
                <span>Your email address will not be published. Required fields are marked *</span>
                <h4>Your Rating * :
                    <span className="prod-icon">{[...Array(5)].map(star => {
                        return <i className="icon-rateStar leave-icon" />
                    })}</span>
                </h4>
                <div className="review-form">
                    <label>
                        <p className="review-form-text">Your Review *</p>
                        <textarea className="review-form-input" />
                    </label>
                    <label>
                        <p className="review-form-text">Your Name *</p>
                        <input className="review-form-input" type="text" />
                    </label>
                    <label>
                        <p className="review-form-text">Your Email *</p>
                        <input className="review-form-input" type="email" />
                    </label>
                    <button className="review-form-btn">Leave Your Review</button>

                </div>

            </div>
            
        </div>
    )
}

export default Reviews;