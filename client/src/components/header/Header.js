import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/about">
          <button type="button">About</button>
        </Link>
      </div>

      <Link to="/">
        <div className="Sign">
          <h1>Can of Books</h1>
        </div>
      </Link>
    </header>
  );
}
