import React from "react";


function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1>WHAT IS SEEFOOD?</h1>
                    <p>SEEFOOD is an interactive recipe book which uses a web application that will scan AR and QR codes to
                        initialize a delightful and immersive experience for the customer. Users will be able to see their
                        ingredients in a 3D form using AR to help them understand what the product looks like in its full
                        form before they build their grocery list or buy the ingredients.
                    </p>
                    <p>Users can also see our brand recommendations for each ingredient if he or she clicks on the 3d
                     model. The user can also build their Amazon cart by click on the products recommended on our page.
                     The people at SEEFOOD wants our users to have delightful experience but also to create an experience
                    that is globally accessible to everyone.</p>
                    <hr />
                    <h2>Customer Quotes</h2>
                    <p> “When I am building my grocery list to buy the ingredients in a recipe book I do not feel confident
                    to buy some of the products. If there was some way to visualize the product and its density I would
                    feel better about creating a dish with unfamiliar ingredients. For example when I was making a
                    korean recipe the ingredients asked for products I have never purchased before. Instead of searching
                    and looking through images it would be great to easily visualize it so I can find it at the store.”</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <h1>HOW DOES IT WORK?</h1>
                    <p>TBF</p>
                    <video>TBF</video>
                </div>
            </div>
            <div className="row">
                <h1>MEET THE TEAM</h1>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator" src="https://avatars2.githubusercontent.com/u/57707960?s=460&v=4" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i
                                className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i
                                className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator" src="https://avatars3.githubusercontent.com/u/57238930?s=460&v=4" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i
                                className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i
                                className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light responsive-img">
                            <img className="activator"
                                src="https://avatars2.githubusercontent.com/u/54822096?s=400&u=b4cbf6c0f17a7a04af1f7af87703eab1c587063d&v=4" />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Card Title<i
                                className="material-icons right">more_vert</i></span>
                            <p><a href="#">This is a link</a></p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i
                                className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default About;