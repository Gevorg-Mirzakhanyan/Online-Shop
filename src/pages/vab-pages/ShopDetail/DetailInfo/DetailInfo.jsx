import "./DetailInfo.scss"
const DetailInfo = () => {
    return (
        <div className="shop-detail-info">
            <h2 className="detail-title">Product Name Goes Here</h2>
            <span className="prod-icon">{[...Array(5)].map(star => {
                return <i className="icon-star icon" />
            })}(99)</span>
            <h3 className="detail-title">$150.00</h3>
            <p className="detail-description">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et,
                labore clita lorem magna duo dolor no sea Nonumy
            </p>
            <div className="detail-info-size">
                <span className="size-name">Sizes:</span>
                <label>
                    <input type="radio" />
                    <span className="size">XS</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">S</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">M</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">L</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">XL</span>
                </label>
            </div>
            <div className="detail-info-size">
                <span className="size-name">Color:</span>
                <label>
                    <input type="radio" />
                    <span className="size">Black</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">White</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">Red</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">Blue</span>
                </label>
                <label>
                    <input type="radio" />
                    <span className="size">Green</span>
                </label>
            </div>
            <div>
                <button className="detail-click">-</button>
                <input className="detail-input" type="number" value={1} />
                <button className="detail-click">+</button>
            </div>
        </div>
    )
}

export default DetailInfo;