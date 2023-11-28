import "./Modal.scss"
export const Modal = ({ onClose,children }) => {


    return (
        <div className="modal-container">
           
            <div className="modal">
            <span onClick={onClose}>X</span>
            
                <div className='modal-body'>
                    {children}
                </div>
            </div>
            <div className='modal-bg' onClick={onClose}></div>
       
        </div>
    )
}