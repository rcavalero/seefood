import React from 'react';
import './styles/brandrec.css'


function BrandCard() {
  return (
    <div className="container recontainer">
      <div className="row recrow">
        <div className="col s12 m4">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582143170/Image_from_iOS_ctvefm.jpg" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582143170/Image_from_iOS_ctvefm.jpg" />
            </div>
            <div className="card-content">
              <h3>BRAND NAME</h3>
              <hr />
              <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582143170/Image_from_iOS_ctvefm.jpg" />
            </div>
            <div className="card-content">
              <h3>BRAND NAME</h3>
              <hr />
              <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582143170/Image_from_iOS_ctvefm.jpg" />
            </div>
            <div className="card-content">
              <h3>BRAND NAME</h3>
              <hr />
              <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandCard;