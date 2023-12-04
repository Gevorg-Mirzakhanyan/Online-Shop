
import "./ListProduct.scss"
const ListProduct = ({ myProductList, onDeletePicture }) => {
  
    return (
  
        <div  className="list-product-container G-flex-column">
                {myProductList.map((product, index) => (
                    <div key={index}>
                        <div className="list-product-box G-justify-between">
                            <div className="G-center">
                                <div>
                                    <img className="list-product-img" src={product.image} alt={`Uploaded ${index + 1}`} />
                                </div>
                                <div className="list-product-info G-flex-column">
                                    <span className="list-product-info-name"><strong>Category:</strong> {product.category}</span>
                                    <span className="list-product-info-name"><strong>Name:</strong> {product.name}</span>
                                    <span className="list-product-info-name"><strong>Description</strong> {product.description}</span>
                                    <span className="list-product-info-name"><strong>Price:</strong> {product.price}</span>
                                    <span className="list-product-info-name"><strong>Rate:</strong> {product.rate}</span>
                                </div>
                            </div>
                            <div className="G-flex-column G-justify-between">
                                <button className="list-product-btn">Edit</button>
                                <button onClick={() => onDeletePicture(index)}  className="list-product-btn">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default ListProduct;