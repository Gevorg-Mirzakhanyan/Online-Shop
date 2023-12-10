import { useEffect, useState } from "react";
import "./AdCategories.scss"
import  Modal from "../../../../components/modal/Modal";
import { addCategory, getCategory } from "../../../../platform/api/category-api";
import CategoryList from "./list/CategoryList";
import AdHeader from "../../../../components/adHeader/AdHeader";
const AdCategories = () => {
    const [isOpen, setIsModal] = useState(false);
    const [myCategoryList, setCategoryList] = useState([])
    const [formData, setFormData] = useState({
        image: '',
        name: '',
    })
    
    function handleChange(e) {
        setFormData({ ...formData, name: e.target.value })
    }

    useEffect(() => {
        getCategoryListData()
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

    const handleClick = async () => {
        const result = await addCategory(formData)
        if (result.data) {
            getCategoryListData()
            setIsModal(false)
        }

    }

    const getCategoryListData = async () => {
        const result = await getCategory()
        if (result.data) {
            setCategoryList(result.data)
        }
    }
    
    const handleDeletePicture = (index) => {
        const updatedPictures = [...myCategoryList];
        updatedPictures.splice(index, 1);
        setCategoryList(updatedPictures);
      };

    return (
        <div>
            <div className="admin-main">
                <AdHeader className="header-admin" title='Category' />
                <div  className="admin-category">
                    <button onClick={() => setIsModal(true)} className="admin-category-btn">Add Category</button>
                    {isOpen ?
                    <Modal title={'Add Category'} onClose={() => setIsModal(false)}>
                        
                        <div className="modal-category">
                            <div className="modal-apload-box G-center G-flex-column">
                                <label className="apload-label">
                                    {formData.image ? <div className="selected-image" style={{ backgroundImage: `url('${formData.image}')` }}></div> : <p>Upload image</p>}
                                    <input onChange={encodeImageFileAsURL} className="apload-img" type="file" placeholder="Image Apload" />
                                </label>
                                <label>
                                    <input className="modal-img-name" onChange={handleChange} placeholder="Create image name..." />
                                </label>
                            </div>
                            <div className="modal-btn-box G-center">
                                <button className="modal-btn" onClick={handleClick}>Add</button>
                                <button className="modal-btn" onClick={() => setIsModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </Modal> : null}
                    <CategoryList myCategoryList={myCategoryList} onDeletePicture={handleDeletePicture} />
                </div>
            </div>
        </div>
    )
}

export default AdCategories;