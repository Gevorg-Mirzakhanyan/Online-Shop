
import { useState } from "react";
import "./ProductInfo.scss"
import Description from "./description/Description"
import Information from "./information/Information"
import Reviews from "./reviews/Reviews"


const ProductInfo = () => {
    const [activeTab, setActiveTab] = useState('tab1'); // Set the default active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return(
        <div >
            <div className="product-information">
                <button onClick={() => handleTabClick('tab1')}  className='product-btn'>Description</button>
                <button onClick={() => handleTabClick('tab2')} className='product-btn'>Information</button>
                <button onClick={() => handleTabClick('tab3')} className='product-btn'>Reviews</button>
            </div>
            <div>
                {activeTab === 'tab1' && <Description />}
                {activeTab === 'tab2' && <Information />}
                {activeTab === 'tab3' && <Reviews />}
            </div>
        </div>
    )
}

export default ProductInfo;