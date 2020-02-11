import React from 'react';
import SearchName from "../SearchName";


import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
<button
className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarNav"
aria-controls="navbarNav"
aria-expanded="false"
aria-label="Toggle navigation"
>
    <span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse row" id="navbarNav">
    <div className="search-area col-4">
        <SearchName />
    </div>
</div>
</nav>
    );
}
export default Nav;