import React from "react";
import '../styles/Recipe.css'

function Recipe() {
    return (
        <div className="recipecontainer">
            <div className="row">
                <div className="col s6">
                    <h1>Gordon Ramsay's Hamburger</h1>
                </div>
                <div className="col s6">
                    <img className="responsive-img" src="https://cdn.stocksnap.io/img-thumbs/960w/WYL5KWIPUD.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col box s6">
                    <h2 className="center-align">INGREDIENTS</h2>
                    <div className="test">
                        <h3>Onion</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-e_jiresq.png" />
                    </div>
                    <div className="test">
                        <h3>Hamburger Bun</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-i_ugctbg.png" />
                    </div>
                    <div className="test">
                        <h3>Tomato</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-h_defxix.png" />
                    </div>
                    <div className="test">
                        <h3>Meat</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-j_ccluvk.png" />
                    </div>
                    <div className="test">
                        <h3>Mayonnaise</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-g_i3y1tz.png" />
                    </div>
                    <div className="test">
                        <h3>Lettuce</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-c_tzrsvp.png" />
                    </div>
                    <div className="test">
                        <h3>Salt</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-b_mgjraw.png" />
                    </div>
                    <div className="test">
                        <h3>Cheese</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-d_bwe2sq.png" />
                    </div>
                    <div className="test">
                        <h3>Pepper</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-a_xmez8q.png" />
                    </div>
                    <div className="test">
                        <h3>Mustard</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582155509/pattern-marker-f_wdmlvy.png" />
                    </div>
                </div>
                <div className="col box s6">
                    <h2 className="center-align">RECIPE</h2>
                    <div className="test">
                        <h3>Gordon Ramsay Video</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582157205/gordonramsayvid_bqveqd.png" />
                    </div>
                    <div className="test">
                        <h3>HIRO</h3>
                        <img className="arbox responsive-img" src="https://res.cloudinary.com/diad1aa5z/image/upload/v1582157981/hiro_qcsdr1.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe