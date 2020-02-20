import React from 'react';
import './styles/brandrec.css'


function BrandCard(props) {
  return (
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              {props.image}
              {/* <img src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582143170/Image_from_iOS_ctvefm.jpg" /> */}
            </div>
           
            <div className="card-content">
              <h4>{props.brand}</h4>
              <hr />
              <h5>Price: {props.price}  (est)</h5>
            </div>
            <div className="card-action">
              <a href={props.url}>Shop on Amazon</a>
            </div>
          </div>
        </div>
  )
}

export default BrandCard;