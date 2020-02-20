import React from "react";
import '../styles/Recipe.css'

function Recipe() {
    return (
        <div className="recipecontainer">
            <div className="row">
                <div className="col s12 m6">
                    <h1 className="center-align recipetitle">Gordon Ramsay's Hamburger</h1>
                    <p className="center-align">Start your journey by opening our app</p>
                    <img className="responsive-img z-depth-2 qr" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582239458/app_dxeqat.png"/>
                </div>
                <div className="col s12 m6">
                    <img className="responsive-img z-depth-3" src="https://cdn.stocksnap.io/img-thumbs/960w/WYL5KWIPUD.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col box s12 m6">
                    <h2 className="center-align">INGREDIENTS</h2>
                    <div className="test">
                        <p>Onion</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-e_jiresq.png" />
                    </div>
                    <div className="test">
                        <p>Hamburger Bun</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-i_ugctbg.png" />
                    </div>
                    <div className="test">
                        <p>Tomato</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-h_defxix.png" />
                    </div>
                    <div className="test">
                        <p>Meat</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-j_ccluvk.png" />
                    </div>
                    <div className="test">
                        <p>Mayonnaise</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-g_i3y1tz.png" />
                    </div>
                    <div className="test">
                        <p>Lettuce</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-c_tzrsvp.png" />
                    </div>
                    <div className="test">
                        <p>Salt</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-b_mgjraw.png" />
                    </div>
                    <div className="test">
                        <p>Cheese</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-d_bwe2sq.png" />
                    </div>
                    <div className="test">
                        <p>Pepper</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-a_xmez8q.png" />
                    </div>
                    <div className="test">
                        <p>Mustard</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-f_wdmlvy.png" />
                    </div>
                </div>
                <div className="col box s12 m6">
                    <h2 className="center-align">RECIPE</h2>
                    <div className="test">
                        <p>Gordon Ramsay Video</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582157205/gordonramsayvid_bqveqd.png" />
                    </div>
                    <div className="test">
                        <p>HIRO</p>
                        <img className="arbox responsive-img z-depth-2" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582157981/hiro_qcsdr1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe