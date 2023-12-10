import AdHeader from "../../../../components/adHeader/AdHeader";
import SizeContent from "./components/sizeContent/SizeContent";
import "./AdSettings.scss"


const AdSettings = () => {
    return (
        <div>
            <AdHeader title='Settings' />
            <div className="setting-section">
                <SizeContent />
            </div>
     
        </div>
    )
}

export default AdSettings;