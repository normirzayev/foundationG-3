import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Navbar() {
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
            <li>
              <NavLink to={"/blog"}>blog</NavLink>
            </li>
            <li>
              <NavLink to={"/apiData"}>api data</NavLink>
            </li>
            <li>
              <NavLink to={"/localForm"}>localForm</NavLink>
            </li>
            <li>
              <NavLink to={"/localTable"}>localTable</NavLink>
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
      <Outlet />
    </div>
  );
}
export default memo(Navbar);
