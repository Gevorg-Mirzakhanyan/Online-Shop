
const Paragrafs = ({ list }) => {

    return (
        <div className="paragraf G-flex">
            {list.map((item) => {
                    return <span>{item}</span>
                })}
        </div>
    )
}

export default Paragrafs;