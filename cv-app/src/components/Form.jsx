import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import "../styles/form.css"

const Form = ({
    onSaveGeneralInfo,
}) => {
    const [generalInfo, setGeneralInfo] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
    });

    const handleGeneralInfoSave = (info) => {
        setGeneralInfo(info);
        onSaveGeneralInfo(info);
    };

    return (
        <div className="form-container">
            <GeneralInfo onSave={handleGeneralInfoSave}/>
        </div>
       
    );
};

export default Form;