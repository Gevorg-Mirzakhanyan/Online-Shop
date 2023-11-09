
const Paragrafs = ({ list }) => {

    return (
        <div className="paragraf">
            {list.map((item) => {
                    return <span>{item}</span>
                })}
        </div>
    )
}

export default Paragrafs;