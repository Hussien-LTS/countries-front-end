import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
    </>
  );
}
export default Header;
