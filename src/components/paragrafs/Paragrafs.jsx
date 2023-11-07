
const Paragrafs = ({ list }) => {

    return (
        <div className="paragraf">
            {list.map((item, index) => {
                    return <span>{item}</span>
                })}
        </div>
    )
}

export default Paragrafs;