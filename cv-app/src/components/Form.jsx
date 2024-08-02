import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import "../styles/Form.css";

const Form = ({
  onSaveGeneralInfo,

}) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  
  const handleSaveGeneralInfo = (info) => {
    setGeneralInfo(info);
    onSaveGeneralInfo(info);
  };

  return (
    <div className="form-container">
      <GeneralInfo onSave={handleSaveGeneralInfo} />
      <div className="buttons"></div>
    </div>
  );
};

export default Form;