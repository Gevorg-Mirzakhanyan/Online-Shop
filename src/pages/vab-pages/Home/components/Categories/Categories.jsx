import Title from "../../../../../components/title/Title";
import "./Categories.scss";
import data from "./data";
const Categories = () => {
    return(
        <div className="categ-section">
            <div className="categ-title">
                <Title title={'CATEGORIES'} />
            </div>
            <div className="cat-product">
                {data.map((item) => (
                    <a className="cat-product-info G-flex" href="/">
                        <img src={item.image} alt="" />
                        <div className="cat-description G-flex-column G-center">
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