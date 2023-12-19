import "./CategoryList.scss";
const CategoryList = ({ myCategoryList, onDeletePicture }) => {
    return (
        <div>
  
                {myCategoryList.map((picture, index) => (
                    <div className="list-box" key={index}>
                        <div className="list-img-name-box G-center">
                            <img className="list-img" src={picture.image} alt={`Uploaded ${index + 1}`} />
                            <span className="list-name">{picture.name}</span>
                        </div>
                        <div className="list-btn-box G-center">
                            <button className="list-btn">Edit</button>
                            <button onClick={() => onDeletePicture(picture._id)} className="list-btn">Delete</button>
                        </div>
                    </div>
                ))}
      
        </div>
    )
}

export default CategoryList;