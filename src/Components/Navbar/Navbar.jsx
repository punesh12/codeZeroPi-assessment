import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/api-data">
        <input className="btn-view-all-pages" type="submit" value="API data" />
      </Link>

      <Link to="/form-data">
        <input
          className="btn-view-documentation"
          type="submit"
          value="Documentation"
        />
      </Link>
    </div>
  );
}

export default Navbar;
