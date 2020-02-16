import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
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
                        <Link to="/manage" className={window.location.pathname === "manage" ? "nav-link active" : "nav-link"}>
                            Manage Ingredients
                        </Link>
                    </li>
                    <li>
                        <Link to="/brandrec" className={window.location.pathname === "brandrec" ? "nav-link active" : "nav-link"}>
                            Brand Recommendation
                        </Link>
                    </li>
                </ul>
            </div>
            <ul class="sidenav" id="mobile-demo">
                <li><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                        </Link></li>
                <li><Link to="/about" className={window.location.pathname === "about" ? "nav-link active" : "nav-link"}>
                    About
                        </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;