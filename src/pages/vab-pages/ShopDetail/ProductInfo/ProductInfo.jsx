import { NavLink } from "react-router-dom";
import "./ProductInfo.scss"
import { Routes, Route } from "react-router-dom";
import Description from "./description/Description";
import Information from "./information/Information";
import Reviews from "./reviews/Reviews";
const ProductInfo = () => {
    return(
        <div>
             <nav className="product-information">
      
                <NavLink className='product-link' to={''}>Home</NavLink>
        
                <NavLink className='product-link' to={'Information'}>Information</NavLink>
            
                <NavLink className='product-link' to={'Reviews'}>Reviews</NavLink>
               
            </nav>
            <Routes>
                <Route path='/' element={<Reviews />} />
                <Route path='information' element={<Description />} /> 
                <Route path='Reviews' element={<Information />} /> 
            </Routes>
        </div>
    )
}

export default ProductInfo;