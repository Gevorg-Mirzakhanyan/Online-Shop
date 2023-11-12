import "./Filter.scss";
import filterPrice from "./filterPrice";
import filterColor from "./filterColor";
import filterSize from "./filterSize";
import Title from "../../../../../components/title/Title";

const Filter = () => {
    return (
        <div className="filter G-flex-column">
           
            <Title title={'FILTER BY PRICE'} />
          
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
            <Title title={'FILTER BY COLOR  '} />
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
            <Title title={'FILTER BY SIZE'} />
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