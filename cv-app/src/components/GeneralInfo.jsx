import {useState} from "react";

const GeneralInfo = ({ onSave }) => {
    //Info state object set for personal details component
    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
    });

    const handleChange = (e) => {
        //New object has to be made, objects are immutable
        const {name, value} = e.target; 

        //Call setInfo to update changes
        setInfo({ ...info, [name]: value});
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(info);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="heading">
                <div className="icon">
                    <span className="material-symbols-outlined">person</span>
                    Personal Details
                </div>
            </h3>
            <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleChange}
                placeholder="John Ford"
            />
            <input
                type="text"
                name="email"
                value={info.email}
                onChange={handleChange}
                placeholder="ford@gmail.com"
            />
            <input
                type="text"
                name="phone"
                value={info.phone}
                onChange={handleChange}
                placeholder="Phone Number (+91 9374808167)"
            />
            <input
                type="text"
                name="location"
                value={info.location}
                onChange={handleChange}
                placeholder="Location (State)"
            />
            <button type="submit">Add</button>
        </form>
    );

};

export default GeneralInfo;

