import "./Modal.scss"
const Modal = ({ onClose, children, title }) => {
    
    return (
        <div className="modal-container G-center">
            <div className="modal">
                <div className="G-justify-between">
                    {title ? <h3 className="modal-title">{title}</h3> : null}
                    <span className="modal-x" onClick={onClose}>X</span>
                </div>
                <div className='modal-body G-center'>
                    {children}
                </div>
            </div>
            <div className='modal-bg' onClick={onClose}></div>
        </div>
    )
}

export default Modal;