import "./Title.scss"
const Title = (props) => {
    return(
        <div>
            <h2 className="coupon-title">
                <span className="title">{props.title}</span>
            </h2>
        </div>
    )
}

export default Title;