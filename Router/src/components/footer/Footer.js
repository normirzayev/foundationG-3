import React, { memo } from "react";
import { Link, Outlet } from "react-router-dom";
function Footer() {
  return (
    <>
      <Outlet />
      <div>
        <ul>
          <li>
            <Link to="/service"> service </Link>
            <br />
            <Link to={"/blog"}> blog </Link>
            <br />
            <Link to="/contactUs"> contactUs </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default memo(Footer);
