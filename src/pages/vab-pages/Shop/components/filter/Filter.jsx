import "./Filter.scss";
import filterPrice from "./filterPrice";
import filterColor from "./filterColor";
import filterSize from "./filterSize";

const Filter = () => {
    return (
        <div className="filter G-flex-column">
            <h2 className="filter-title">
                <span className="title">FILTER BY PRICE</span>
            </h2>
            <div className="filter-price G-flex-column">
                {filterPrice.map((item) => (
                    <div className="filter-box G-justify-between" >
                        <div className="filter-input G-flex">
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
            <div className="filter-price G-flex-column">
                {filterColor.map((item) => (
                    <div className="filter-box G-justify-between" >
                        <div className="filter-input G-flex">
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
            <div className="filter-price G-flex-column">
                {filterSize.map((item) => (
                    <div className="filter-box G-justify-between" >
                        <div className="filter-input G-flex">
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