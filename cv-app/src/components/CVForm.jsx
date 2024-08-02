import { useState } from "react";
import Form from "./Form";
import DisplayCV from "./DisplayCV";
import "../styles/CVForm.css";

const CVForm = () => {
    const initialInfo = {
        generalInfo: null
    };

    const [info, setInfo] = useState(initialInfo);

    //CV cleared of contents, empty according to initialInfo object
    const clearCV = () => {
        setInfo(initialInfo);
    };

    return (
        <div className="cvForm">
            <div className="Form">
                <Form 
                    onSaveGeneralInfo={(info) => setInfo((prevInfo) => ({ ...prevInfo, generalInfo: info }))}
                />
                <button onClick={clearCV}>Clear Resume</button>
            </div>
            <div className="DisplayCV">
                <DisplayCV
                    generalInfo={info.generalInfo}
                />
            </div>
        </div>
    );
};

export default CVForm;