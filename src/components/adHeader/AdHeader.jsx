import "./AdHeader.scss"

const AdHeader = () => {
    const handleLogOut = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };
    return (
        <div className="log-btn">
              <button className="log-btn-click" onClick={handleLogOut}>Log out</button>
        </div>

    )
}

export default AdHeader;