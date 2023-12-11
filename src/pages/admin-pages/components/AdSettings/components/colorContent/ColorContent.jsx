import { useEffect, useState } from "react";
import Modal from "../../../../../../components/modal/Modal.jsx"
import { DeleteDialog } from "../../../../../../components/delete/deleteDialog.jsx";
// import "./SizeContent.scss"
import { deleteColor, getColorList } from "../../../../../../platform/api/color-api.js";
import ManageColor from "./manageColor/ManageColor.jsx";



const SizeContent = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [colorList, setColorList] = useState([]);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    useEffect(() => {
        getColorListData()
    }, []);


    const getColorListData = async () => {
        const result = await getColorList();
        if (result.data) {
            setColorList(result.data);
        }
    };


    const toggleModal = (value) => {
        setIsOpenModal(value);
        if (!value) {
            setSelectedItem(null);
        }
    };

    const handleDelete = async () => {
        console.log(selectedItem._id);
        await deleteColor(selectedItem._id);
        setIsOpenDeleteModal(false);
        setSelectedItem(null);
        getColorListData();
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };


    return (
        <div className="size-section">
            <div className="settings-header">
                <div className="add-option">
                    <button className="add-size" onClick={() => toggleModal(true)}>Add Color</button>
                </div>
            </div>
            {colorList.length ? (
                <div className="size-settings-list">
                    {colorList.map((item, index) => {
                        return (
                            <div key={index} className="size-item">
                                <span className="size-name">{item.name}</span>
                                <div className="size-action G-flex">
                                    <button className="size-btn" onClick={() => {handleSelectItem(item); setIsOpenModal(true)}}>Edit</button>
                                    <button className="size-btn" onClick={() => {handleSelectItem(item); setIsOpenDeleteModal(true);}}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {isOpenModal ? (
                <Modal
                    onClose={() => toggleModal(false)}
                    title={selectedItem ? "Edit Color" : "Add Color"}
                >
                    <ManageColor
                        updateColorList={getColorListData}
                        onClose={() => toggleModal(false)}
                        manageColorData={selectedItem}
                    />
                </Modal>
            ) : null}
            {isOpenDeleteModal ? (
                <Modal
                    onClose={()=> {
                        setIsOpenDeleteModal(false)
                        setSelectedItem(null)
                    }}
                    title={"Delete Size"}
                >
                <DeleteDialog 
                    onClose={() => {
                    setIsOpenDeleteModal(false);
                    setSelectedItem(null);
                    }}
                    onDelete={() => handleDelete()}
                    title={"Are you sure you want to delete?"}
                />
                </Modal>
            ) : null}
        </div>
    )
}

export default SizeContent;