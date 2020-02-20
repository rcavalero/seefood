import React from 'react';
import './styles/Brandrec.css'


function BrandCard(props) {
  return (
    <div className="container recontainer">
      <h1 className="center-align">Brand Recommendation</h1>
      <h2 className="center-align">Ketchup</h2>
      <div className="row recrow">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582143170/Image_from_iOS_ctvefm.jpg" />
            </div>
            <div className="card-content">
              <h4>BRAND NAME {props.brand}</h4>
              <hr />
              <h5>Price: {props.price}  (est)</h5>
            </div>
            <div className="card-action">
              <a href={props.url}>Shop on Amazon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandCard;