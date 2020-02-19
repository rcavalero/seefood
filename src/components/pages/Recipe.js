import React from "react";
import '../styles/Recipe.css'

function Recipe() {
    return (
        <div className="container">
            <div className="row">
                <div className="col box s6">
                    <h1>Hamburger</h1>
                </div>
                <div className="col box s6">
                    <img></img>
                </div>
            </div>
            <div className="row">
                <div className="col box s4"></div>
                <div className="col box s2"></div>
                <div className="col box s4"></div>
                <div className="col box s2"></div>
            </div>
        </div>
    )
}

export default Recipe