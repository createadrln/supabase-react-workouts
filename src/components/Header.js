import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/flexing365-text-header.svg";

import "../scss/Header.scss";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="Flexing365 Workouts Header Logo" className="header-logo" />
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/workouts">Workouts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
