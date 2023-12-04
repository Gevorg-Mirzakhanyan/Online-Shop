import { useEffect, useState } from "react";
import "./AdProducts.scss"
import { Modal } from "../../../../components/modal/Modal";
import { addProduct, getProduct } from "../../../../platform/api/product-api";
import ListProduct from "./listProduct/ListProduct";

const AdProducts = () => {

    const [isOpen, setIsModal] = useState(false);
    const [myProductList, setProductList] = useState([])
    const [formData, setFormData] = useState({
        image: '',
        category: '',
        name: '',
        description: '',
        price: '',
        rate: '',
    })

    function handleChangeProductCategory(e) {
        setFormData({...formData, category: e.target.value})
    }

    function handleChangeProductName(e) {
        setFormData({...formData, name: e.target.value})
    }

    function handleChangeProductDesc(e) {
        setFormData({...formData, description: e.target.value})
    }

    function handleChangeProductPrice(e) {
        setFormData({...formData, price: e.target.value})
    }

    function handleChangeProductRate(e) {
        setFormData({...formData, rate: e.target.value})
    }


    useEffect(() => {
        getProductListData()
    }, [])
    function encodeImageFileAsURL(element) {
        const file = element.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = function () {
                setFormData({ ...formData, image: reader.result })
            }
            reader.readAsDataURL(file);
        }
    }

    const addProductClick = async () => {
        const result = await addProduct(formData)
        if (result.data) {
            getProductListData()
            setIsModal(false)
        }
    }

    const getProductListData = async () => {
        const result = await getProduct()
        if (result.data) {
            setProductList(result.data)
        }
    }

    return (
        <div>
            <div  className="admin-category">
                <button onClick={() => setIsModal(true)} className="admin-category-btn">Add Product</button>
            </div>
            {isOpen ?
                <Modal onClose={() => setIsModal(false)}>
                    <div className="modal-product">
                        <div>
                            <label className="upload-label">
                                {formData.image ? <div className="selected-image" style={{ backgroundImage: `url('${formData.image}')` }}></div> : <p>Upload image</p>}
                                <input onChange={encodeImageFileAsURL} className="upload-img" type="file" placeholder="Image Apload" />
                            </label>
                            <label>
                                <input onChange={handleChangeProductCategory} className="product-input" placeholder="Select Category" />
                            </label>
                            <label>
                                <input onChange={handleChangeProductName} className="product-input" placeholder="Create Product Name" />
                            </label>
                            <label>
                                <input onChange={handleChangeProductDesc} className="product-input" placeholder="Create Product description"/>
                            </label>
                            <label>
                                <input onChange={handleChangeProductPrice} className="product-input" placeholder="Create Price" />
                            </label>
                            <label>
                                <input onChange={handleChangeProductRate} className="product-input" placeholder="Create Rate" />
                            </label>
                        </div>
                   
                        <div>
                            <button className="modal-btn" onClick={addProductClick}>Add</button>
                            <button className="modal-btn" onClick={() => setIsModal(false)}>Delete</button>
                        </div>
                    </div>
                </Modal> : null}
                <ListProduct myProductList={myProductList} />
                </div>
    )
}

export default AdProducts;