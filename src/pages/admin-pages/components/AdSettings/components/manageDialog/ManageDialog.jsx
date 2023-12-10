import { useEffect, useState } from "react";
import { addSize, editSize } from "../../../../../../platform/api/size-api";
import "./ManageDialog.scss"
const ManageDialog = ({ manageData, updateSizesList, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
    })

    useEffect(() => {
        if (manageData) {
            setFormData({ ...formData, name: manageData.name })
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleClick = async () => {
        if (formData.name.length) {
            if (manageData) {
                await editSize(formData, manageData._id);
                updateSizesList();
                onClose();
            } else {
                const result = await addSize(formData);
                if (result.data) {
                    updateSizesList();
                    onClose();
                }
            }
        }
    };

    return (
        <div className="modal-body-categorie G-flex-column">
            <div className="content_box ">
                <div className="add-name-box">
                    <label>
                        <input
                            value={formData.name}
                            type="text"
                            placeholder="Create size"
                            name="name"
                            onChange={handleChange}
                        />
                        </label>
                </div>
            </div>
            <div className="confirm-button">
                <button className="confirm-btn" onClick={handleClick}>
                    {manageData ? "Save" : "ADD"}
                </button>
                <button className="confirm-btn" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ManageDialog;