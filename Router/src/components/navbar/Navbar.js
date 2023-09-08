import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <ul className="d-flex gap-5 mt-3">
            <li>
              <NavLink to={"/"}>Form</NavLink>
            </li>
            <li>
              <NavLink to={"/table"}>table</NavLink>
            </li>
            <li>
              <NavLink to={"/setting"}>setting</NavLink>
            </li>
            <li>
              <NavLink to={"/contactus"}>contactUs</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
