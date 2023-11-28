import { useEffect, useState } from "react";
import "./AdCategories.scss"
import { Modal } from "../../../../components/modal/Modal";
import { addCategory, getCategory } from "../../../../platform/api/category-api";
const AdCategories = () => {
    const [isOpen, setIsModal] = useState(false);
    const [categoryList, setCategoryList] = useState([])
    const [formData, setFormData] = useState({
        image: '',
        name: '',
    })

    function handleChange (e) {
        setFormData({...formData,name: e.target.value})
    }

    useEffect(()=>{
        getCategoryListData()
    },[])
    function encodeImageFileAsURL(element) {
        const file = element.target.files[0];
        console.log(file) 
        if (file) {
          const reader = new FileReader();
          reader.onloadend = function () {
            setFormData({ ...formData, image: reader.result })
          }
          reader.readAsDataURL(file);
        }
      }

      const handleClick = async ()=> {
        console.log(formData);
        const result = await addCategory(formData)

        if(result.data){
            getCategoryListData()
            setIsModal(false)
        }

      }

      const getCategoryListData = async()=>{
        const result = await getCategory()
        if(result.data){
            setCategoryList(result.data)
        }
      }

    return (
        <div className="admin-category">
            <button onClick={() => setIsModal(true)} className="admin-category-btn">Add Category</button>





            {isOpen ? <Modal 
                onClose={() => setIsModal(false)}
                >
                <div className="modal-category">
                    <div className="G-center G-flex-column">
                        <label>
                            
                            {formData.image? <div className="selected-image" style={{backgroundImage:`url('${formData.image}')`}}></div>:<p>apload image</p>}
                        <input onChange={encodeImageFileAsURL} className="apload-img" type="file" placeholder="Image Apload" />
                        </label>
                        <label>
                            <input onChange={handleChange} placeholder="Image Apload" />
                        </label>
                    </div>
                    <div className="G-center">
                        <button onClick={handleClick}>Add</button>
                        <button onClick={() => setIsModal(false)}>Delete</button>
                    </div>
                </div>

                </Modal> : null}
           
        </div>
    )
}

export default AdCategories;