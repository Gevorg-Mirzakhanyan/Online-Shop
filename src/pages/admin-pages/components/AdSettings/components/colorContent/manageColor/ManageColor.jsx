import { useEffect, useState } from "react";
import { addColor, editColor } from "../../../../../../../platform/api/color-api";

const ManageColor = ({ manageColorData, updateColorList, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
    })

    useEffect(() => {
        if (manageColorData) {
            setFormData({ ...formData, name: manageColorData.name })
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleColorEdit = async () => {
        if (formData.name.length) {
            if (manageColorData) {
                await editColor(formData, manageColorData._id);
                updateColorList();
                onClose();
            } else {
                const result = await addColor(formData);
                if (result.data) {
                    updateColorList();
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
                            type="color"
                            placeholder="Create Color"
                            name="name"
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </div>
            <div className="confirm-button">
                <button className="confirm-btn" onClick={ handleColorEdit }>
                    {manageColorData ? "Save" : "ADD"}
                </button>
                <button className="confirm-btn" onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default ManageColor;