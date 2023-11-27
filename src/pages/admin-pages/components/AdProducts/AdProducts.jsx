import "./AdProducts.scss"

const AdProducts = () => {
    return (
        <div className="admin-products">
        <label>
            <input className="ad-product-input" type="text" placeholder="Select Category...." />
        </label>
        <label>
            <input className="ad-product-input" type="text" placeholder="Product name...." />
        </label>
        <label>
            <input className="ad-product-input" type="text" placeholder="Product description...." />
        </label>
        <label>
            <input className="ad-product-input" type="text" placeholder="Price...." />
        </label>
        <label>
            <input className="ad-product-input" type="text" placeholder="Rate...." />
        </label>
        <label>
            <input className="ad-product-input" type="text" placeholder="Product image...." />
        </label>
    </div>
    )
}

export default AdProducts;