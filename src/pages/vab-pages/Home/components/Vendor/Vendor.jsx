import "./Vendor.scss"
import vendor1 from "../../../../../assets/img/vendor-1.jpg"
import vendor2 from "../../../../../assets/img/vendor-2.jpg"
import vendor3 from "../../../../../assets/img/vendor-3.jpg"
import vendor4 from "../../../../../assets/img/vendor-4.jpg"
import vendor5 from "../../../../../assets/img/vendor-5.jpg"
import vendor6 from "../../../../../assets/img/vendor-6.jpg"
import vendor7 from "../../../../../assets/img/vendor-7.jpg"
import vendor8 from "../../../../../assets/img/vendor-8.jpg"
const Vendor = () => {
const image = [
    vendor1,
    vendor2,
    vendor3,
    vendor4,
    vendor5,
    vendor6,
    vendor7,
    vendor8,
]

    return(
        <div className="vendor">
            {image.map((item) => {
                return <img src={item} alt="/" />
            })}
        </div>
    )
}

export default Vendor;