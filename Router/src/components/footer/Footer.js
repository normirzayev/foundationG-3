import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
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
  );
}
