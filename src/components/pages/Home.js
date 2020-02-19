import React from "react";
import "../styles/Home.css";

function Home() {
    return (
        <div className="container home">
            <h1 className="right-align">SEEFOOD</h1>
            <div className="btnbox">
                <p className="center-align">Start your experience by clicking on the AR or QR button</p>
                <button className="waves-effect waves-light btn-large red accent-2"><i className="material-icons right">center_focus_strong</i>AR</button>
                <button className="waves-effect waves-light btn-large amber darken-4"><i className="material-icons right">camera_enhance</i>QR</button>
            </div>
     </div>
    );
}

export default Home;