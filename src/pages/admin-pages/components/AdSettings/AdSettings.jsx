import AdHeader from "../../../../components/adHeader/AdHeader";
import SizeContent from "./components/sizeContent/SizeContent";
import "./AdSettings.scss"
import ColorContent from "./components/colorContent/ColorContent";


const AdSettings = () => {
    return (
        <div>
            <AdHeader title='Settings' />
            <div className="setting-section G-justify-around">
                <SizeContent />
                <ColorContent />
            </div>
     
        </div>
    )
}

export default AdSettings;