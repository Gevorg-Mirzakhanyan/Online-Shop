import { useEffect, useState } from "react";
import "./AdProducts.scss"
import { Modal } from "../../../../components/modal/Modal";


const AdProducts = () => {

    const [isOpen, setIsModal] = useState(false);
    const [myCategoryList, setCategoryList] = useState([])
    const [formData, setFormData] = useState({
        image: '',
        name: '',
    })

    function handleChange(e) {
        setFormData({ ...formData, name: e.target.value })
    }

    // useEffect(() => {
    //     getCategoryListData()
    // }, [])
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
                                <input className="product-input" placeholder="Select Category" />
                            </label>
                            <label>
                                <input className="product-input" placeholder="Create Product Name" />
                            </label>
                            <label>
                                <input className="product-input" placeholder="Create Product description"/>
                            </label>
                            <label>
                                <input className="product-input" placeholder="Create Price" />
                            </label>
                            <label>
                                <input className="product-input" placeholder="Create Rate" />
                            </label>
                        </div>
                   
                        <div>
                            <button className="modal-btn">Add</button>
                            <button className="modal-btn" onClick={() => setIsModal(false)}>Delete</button>
                        </div>
                    </div>
                </Modal> : null}
                </div>
    )
}

export default AdProducts;