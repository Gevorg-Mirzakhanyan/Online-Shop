import "./Filter.scss";
import filterPrice from "./filterPrice";
import filterColor from "./filterColor";
import filterSize from "./filterSize";

const Filter = () => {
    return (
        <div className="filter">
            <h2 className="filter-title">
                <span className="title">FILTER BY PRICE</span>
            </h2>
            <div className="filter-price">
                {filterPrice.map((item) => (
                    <div className="filter-box" >
                        <div className="filter-input">
                            <input type="checkbox" />
                            <span>{item.name}</span>  
                        </div>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
            <h2 className="filter-title">
                <span className="title">FILTER BY COLOR</span>
            </h2>
            <div className="filter-price">
                {filterColor.map((item) => (
                    <div className="filter-box" >
                        <div className="filter-input">
                            <input type="checkbox" />
                            <span>{item.name}</span>  
                        </div>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
            <h2 className="filter-title">
                <span className="title">FILTER BY SIZE</span>
            </h2>
            <div className="filter-price">
                {filterSize.map((item) => (
                    <div className="filter-box" >
                        <div className="filter-input">
                            <input type="checkbox" />
                            <span>{item.name}</span>  
                        </div>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Filter;