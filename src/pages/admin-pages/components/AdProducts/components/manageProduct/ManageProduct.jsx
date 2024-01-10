import { useEffect, useState } from "react";
import { getColorList } from "../../../../../../platform/api/color-api";
import { getSizesList } from "../../../../../../platform/api/size-api";
import { addProduct, editProduct, getProduct } from "../../../../../../platform/api/product-api";


const ManageProduct = ({ manageData, close, updateList }) => {

    const [sizeList, setSizeList] = useState([]);
    const [colorList, setColorList] = useState([]);
    const [categoryList, setCategoryList] = useState([])

    const [formData, setFormData] = useState({
        image: null,
        categoryId: '',
        name: '',
        description: '',
        price: 0,
        count: 0,
        size: [],
        color: '',
        colorId: null,
    })

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (manageData) {
          setFormData({
            name: manageData.name,
            image: manageData.image,
            description: manageData.description,
            price: manageData.price,
            rate: manageData.rate,
            size: manageData.size,
            color: manageData.color,
            categoryId: manageData.categoryId,
            counter:manageData.counter
          });
        }
      }, [manageData]);


    useEffect(() => {
        getAllInfoData()

    }, []);

    const getAllInfoData = async () => {
        const result = Promise.all([
          getProduct(),
          getColorList(),
          getSizesList(),
        ]).then((data) => {
          setCategoryList(data[0].data);
          setColorList(data[1].data);
          setSizeList(data[2].data);
        });
      };



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
        if (
            formData.image &&
            formData.name &&
            formData.description &&
            formData.price > 0
        ) {
            if (manageData) {
                await editProduct(formData, manageData._id);
                updateList();
                close()
            } else {
                const result = await addProduct(formData);
                if (result.data) {
                    updateList();
                    close()
                }
            }
        }
    };




    const selectColor = (e) => {
        setFormData({ ...formData, colorId: e.target.value })
    }

    const selectCategory = (e) => {
        setFormData({ ...formData, categoryId: e.target.value })
    }

    const selectSize = (id) => {
        let index = formData.size.indexOf(id)
        let newSize = formData.size
        if (index >= 0) {
            newSize.splice(index, 1)
        } else {
            newSize.push(id)
        }
        setFormData({ ...formData, size: newSize })
    }


    return (
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
                <label className="select-label">
                    {categoryList.length ? (
                        <select
                            onChange={selectCategory}
                            className="category-list"
                        >
                            <option value="">Select Category</option>
                            {categoryList.map((item, index) => {
                                return (
                                    <option value={item._id} key={index}>
                                        {item.name ? item.name : "Add product category"}
                                    </option>
                                );
                            })}
                        </select>
                    ) : null}
                </label>
                <label className="select-label">
                    {colorList.length ? (
                        <select
                            onChange={selectColor}
                            className="color-list"
                        >
                            <option value="">Select color</option>
                            {colorList.map((item, index) => {
                                return (
                                    <option value={item._id} key={index}>
                                        {item.name ? item.name : "Add color"}
                                    </option>
                                );
                            })}
                        </select>
                    ) : null}
                </label>
                <div className="select-label G-justify-between">
                    {sizeList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="size-checkBox"
                            >
                                <label>
                                    <p>{item.name}</p>
                                    <input
                                        checked={formData.size.includes(item._id)}
                                        type="checkbox"
                                        onChange={() => selectSize(item._id)}
                                    />
                                </label>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <button className="modal-btn" onClick={handleClick}>
                    {manageData ? "SAVE" : "ADD"}
                </button>
                <button className="modal-btn" onClick={close}>Cancel</button>
            </div>
        </div>

    )
}

export default ManageProduct