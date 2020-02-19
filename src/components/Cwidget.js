import React, { Component } from 'react';
// import { render } from 'react-dom';
import cloudinary from 'cloudinary-react'

class Cwidget extends Component {

uploadWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'seefoodar', upload_preset: 'preset', tags:['xmas']},
        function(error, result) {
            console.log(result);
        });
}

render(){
    return (
        <div className="main">
            <h3>Cloudinary</h3>
            <div className="upload">
                <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                    Add Image
                </button>
            </div>
        </div>
    );
}
}

export default Cwidget

