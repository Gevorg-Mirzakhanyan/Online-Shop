
const Paragrafs = ({ list }) => {

    return (
        <div className="shopPage">
            <ul>
                {list.map((item, index) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Paragrafs;