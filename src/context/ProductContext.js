
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext({});

export const UserProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const addToProduct = (productData) => {
        setProductList([...productList, productData])
    }


    return (
        <ProductContext.Provider value={
            { productList, addToProduct }}>
            {children}
        </ProductContext.Provider>
    )
}




export const useProductContext = () => {
    const testProduct = useContext(ProductContext)
    return {
        product: testProduct.productList,
        addToProduct: testProduct.addToProduct
    }
}