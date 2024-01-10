import { useEffect, useState } from "react";
import { deleteSize, getSizesList } from "../../../../../../platform/api/size-api";
import Modal from "../../../../../../components/modal/Modal.jsx"
import ManageDialog from "../manageDialog/ManageDialog";
import { DeleteDialog } from "../../../../../../components/delete/deleteDialog.jsx";
import "./SizeContent.scss"

const SizeContent = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const [sizeList, setSizeList] = useState([]);

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    useEffect(() => {
        getSizeListData()
    }, []);


    const getSizeListData = async () => {
        const result = await getSizesList();
        if (result.data) {
            setSizeList(result.data);
        }
    };


    const toggleModal = (value) => {
        setIsOpenModal(value);
        if (!value) {
            setSelectedItem(null);
        }
    };

    const handleDelete = async () => {
        await deleteSize(selectedItem._id);
        setIsOpenDeleteModal(false);
        setSelectedItem(null);
        getSizeListData();
    };

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };


    return (
        <div className="size-section">
            <div className="settings-header">
                <div className="add-option">
                    <button className="add-size" onClick={() => toggleModal(true)}>Add Size</button>
                </div>
            </div>
            {sizeList.length ? (
                <div className="size-settings-list">
                    {sizeList.map((item, index) => {
                        return (
                            <div key={index} className="size-item">
                                <p className="size-name">{item.name}</p>
                                <div className="size-action G-flex">
                                    <button className="size-btn" onClick={() => {handleSelectItem(item); setIsOpenModal(true)}}>Edit</button>
                                    <button className="size-btn" onClick={() => {handleSelectItem(item); setIsOpenDeleteModal(true)}}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
            {isOpenModal ? (
                <Modal
                    onClose={() => toggleModal(false)}
                    title={selectedItem ? "Edit size" : "Add Size"}
                >
                    <ManageDialog 
                        updateSizesList={getSizeListData}
                        onClose={() => toggleModal(false)}
                        manageData={selectedItem}
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