import { useState } from "react";
import "./AdCategories.scss"
const AdCategories = () => {
    const [isOpen, setIsModal] = useState(false);

    return (
        <div className="admin-category">
            <button onClick={() => setIsModal(true)} className="admin-category-btn">Add Category</button>
            {isOpen ? 'xxx': null}
            {/* <label>
                <input className="ad-catgeory-input" type="text" placeholder="Category image...." />
            </label>
            <label>
                <input className="ad-catgeory-input" type="text" placeholder="Category name...." />
            </label> */}
        </div>
    )
}

export default AdCategories;