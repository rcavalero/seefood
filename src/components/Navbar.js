import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Navbar extends Component {

    componentDidMount() {
        M.AutoInit()
    }

    render() {
        return (
            <nav>
                <ul id="dropdown1" className="dropdown-content">
                    <li> <Link to="/recipe" className={window.location.pathname === "recipe" ? "nav-link active" : "nav-link"}>
                        Hamburger
                        </Link></li>
                    <li><a href="#!">two</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">three</a></li>
                </ul>
                <ul id="dropdown2" className="dropdown-content">
                    <li> <Link to="/manage" className={window.location.pathname === "manage" ? "nav-link active" : "nav-link"}>
                        Manage
                        </Link></li>
                    <li className="divider"></li>
                    <li> <Link to="/brandrec" className={window.location.pathname === "brandrec" ? "nav-link active" : "nav-link"}>
                        Brand
                        </Link></li>
                </ul>
                <div className="nav-wrapper teal darken-4">
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                                Home
                        </Link>
                        </li>
                        <li>
                            <Link to="/about" className={window.location.pathname === "about" ? "nav-link active" : "nav-link"}>
                                About
                        </Link>
                        </li>
                        <li>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown1">Recipes<i className="material-icons right">arrow_drop_down</i></a>
                        </li>
                        <li>
                            <a className="dropdown-trigger" href="#!" data-target="dropdown2">Internal<i className="material-icons right">arrow_drop_down</i></a>
                        </li>
                    </ul>
                </div>
                <ul className="sidenav teal darken-4" id="mobile-demo">
                    <li>
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={window.location.pathname === "about" ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" className={window.location.pathname === "manage" ? "nav-link active" : "nav-link"}>
                            Manage Ingredients
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandrec" className={window.location.pathname === "brandrec" ? "nav-link active" : "nav-link"}>
                            Brand Recommendation
                        </Link>
                    </li>
                    <li>
                        <Link to="/recipe" className={window.location.pathname === "recipe" ? "nav-link active" : "nav-link"}>
                            Recipe
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default Navbar;