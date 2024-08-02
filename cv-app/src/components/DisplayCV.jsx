import "../styles/displaycv.css";

const DisplayCV = ({generalInfo}) => {
    return (
        <div className="display">
            <div className="header">
                {generalInfo && (
                    <div>
                        <h2>{generalInfo.name}</h2>
                        <div className="personalInfo">
                            <p className="personalDetails">
                                <span className="material-symbols-outlined">call</span>{" "}
                                {generalInfo.phone}
                            </p>
                            <p className="personalDetails">
                                <span className="material-symbols-outlined">mail</span>
                                {generalInfo.email}
                            </p>
                            <p className="personalDetails">
                                <span className="material-symbols-outlined">location_on</span>{" "}
                                {generalInfo.location}
                            </p>

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DisplayCV;