import { useEffect, useState } from "react";
import "./AdProducts.scss"
import  Modal  from "../../../../components/modal/Modal";
import { addProduct, deleteProduct, editProduct, getProduct } from "../../../../platform/api/product-api";
import ListProduct from "./listProduct/ListProduct";
import AdHeader from "../../../../components/adHeader/AdHeader";

const AdProducts = () => {

    const [isOpen, setIsModal] = useState(false);
    const [myProductList, setProductList] = useState([])
    const [formData, setFormData] = useState({
        image: '',
        category: '',
        name: '',
        description: '',
        price: '',
        count: '',
        size: '',
        color: ''
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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

    const handleEditProduct= async () => {
        if (formData.name.length) {
            if (formData) {
                console.log(myProductList[0]._id);
                await editProduct(formData, myProductList[0]._id);
          
                setIsModal(true )
                getProductListData();
            } else {
                const result = await addProduct(formData);
                if (result.data) {
                    getProductListData();
                    setIsModal(false)
                }
            }
        }
    };

    const handleDeleteProduct = async () => {
        const id = myProductList[0]._id
        await deleteProduct(id);
        getProductListData();
    };

    return (
        <div>
            <div className="admin-product-header G-flex-column">
                <AdHeader title='Products' />
                <div className="admin-category">
                    <button onClick={() => setIsModal(true)} className="admin-category-btn">Add Product</button>
                    <div>
                        <ul className="admin-product-list G-justify-between">
                            <li>Product Name</li>
                            <li>Category ID</li>
                            <li>Description</li>
                            <li>Price</li>
                            <li>Count</li>
                            <li>Size</li>
                            <li>Color</li>
                            <li>Actions</li>
                        </ul>
                    </div>
                    {isOpen ?
                        <Modal title={'Add Products'} onClose={() => setIsModal(false)}>
                            <div className="modal-product">
                                <div>
                                    <label className="upload-label">
                                        {formData.image ? <div className="selected-image" style={{ backgroundImage: `url('${formData.image}')` }}></div> : <p>Upload image</p>}
                                        <input 
                                            onChange={encodeImageFileAsURL} 
                                            className="upload-img" 
                                            type="file" 
                                            placeholder="Image Apload" 
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            onChange={handleChange} 
                                            className="product-input" 
                                            placeholder="Create Product Name" 
                                            name="name"
                                            value={formData.name}
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            onChange={handleChange} 
                                            className="product-input" 
                                            placeholder="Select Category" 
                                            name="category"
                                            value={formData.category}
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            onChange={handleChange} 
                                            className="product-input" 
                                            placeholder="Create Product description" 
                                            name="description"
                                            value={formData.description}
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            onChange={handleChange} 
                                            className="product-input" 
                                            placeholder="Create Price" 
                                            name="price"
                                            value={formData.price}
                                        />
                                    </label>
                                    <label>
                                        <input 
                                            onChange={handleChange} 
                                            className="product-input" 
                                            placeholder="Create Count" 
                                            name="count"
                                            value={formData.count}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <button className="modal-btn" onClick={addProductClick}>Add</button>
                                    <button className="modal-btn" onClick={() => setIsModal(false)}>Cancel</button>
                                </div>
                            </div>
                        </Modal> : null}
                    <ListProduct 
                        myProductList={myProductList} 
                        onDeletePicture={handleDeleteProduct} 
                        onEditPicture={handleEditProduct}  
                    />
                </div>
            </div>
        </div>
    )
}

export default AdProducts;