import React from "react";
import "../styles/Home.css";

function Home() {
    return (
        <div className="container">
            <h1 className="right-align">SEEFOOD</h1>
            <div className="btnbox">
                <p className="center-align">Start your experience by clicking on the AR or QR button</p>
                <button className="waves-effect waves-light btn-large"><i className="material-icons right">center_focus_strong</i>AR</button>
                <button className="waves-effect waves-light btn-large"><i className="material-icons right">camera_enhance</i>QR</button>
            </div>
     </div>
    );
}

export default Home;