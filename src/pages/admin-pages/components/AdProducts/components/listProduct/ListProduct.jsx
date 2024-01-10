


import "./ListProduct.scss"

const ListProduct = ({ myProductList,onDeletePicture, onEditProduct }) => {

    console.log(myProductList)
    
    return (
  
        <div  className="list-product-container G-flex-column">
                {myProductList.map((product, index) => (
                    <div key={index}>
                        <div className="list-product-box G-justify-between G-center">
                           <div className="G-center">
                                <img className="list-product-img" src={product.image} alt={`Uploaded ${index + 1}`} />
                                <span className="list-product-info-name">{product.name}</span>
                            </div>
                            <div className="list-product-info-name"> {product.category}</div>
                            <div className="list-product-info-name">{product.description}</div>
                            <div className="list-product-info-name">{product.price}</div>
                            <div className="list-product-info-name">{product.count}</div>
                            <div className="list-product-info-name">{product.size.length}</div>
                            <div className="list-product-info-name">{product.color}</div>
                            <div className="list-product-action G-center">
                                <button onClick={()=> onEditProduct(product)} className="list-product-btn">Edit</button>
                                <button  onClick={()=> onDeletePicture(product)} className="list-product-btn">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ListProduct;