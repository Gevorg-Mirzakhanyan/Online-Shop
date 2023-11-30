
// import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext({});

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState(0);
    const [pictures, setPictures] = useState([]);

    const addToProduct = (productData) => {
        setProductList([ productData])
    }

    
  const deletePicture = (index) => {
    setPictures((prevPictures) => {
      const updatedPictures = [...prevPictures];
      updatedPictures.splice(index, 1);
      return updatedPictures;
    });
  };

      
    return (
        <ProductContext.Provider value={
            { productList, addToProduct,}}>
            {children}
        </ProductContext.Provider>
    )
}




// export const useProductContext = () => {
//     const testProduct = useContext(ProductContext)
//     return {
//         product: testProduct.productList,
//         addToProduct: testProduct.addToProduct
//     }
// }