import "./Categories.scss";
import data from "./data";
const Categories = () => {
    return(
        <div className="categ-section">
            <h2 className="categ-title">
                <span className="title">CATEGORIES</span>
            </h2>
            <div className="cat-product">
                {data.map((item) => (
                    <a className="cat-product-info" href="/">
                        <img src={item.image} alt="" />
                        <div className="cat-description">
                            <h6 className="cat-name">{item.name}</h6>
                            <span className="cat-name-info">{item.info}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Categories;