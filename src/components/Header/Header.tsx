import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [tab, setTab] = useState(location.pathname);

  return (
    <div className="header">
      <Link
        to="/about"
        style={{
          textDecoration: "none",
        }}
        onClick={() => setTab("/about")}
      >
        <h1>{'James R. Crews'}</h1>
      </Link>
      <div className="header__tabs">
        <Link
          to="/about"
          style={{
            textDecoration: "none",
          }}
          onClick={() => setTab("/about")}
        >
          <div
            className={[
              "header__tabs--tab",
              `${
                tab === "/about" || tab === "/" ? "header__tabs--active" : ""
              }`,
            ].join(" ")}
          >
            <h1>About</h1>
          </div>
        </Link>
        <Link
          to="/projects"
          style={{
            textDecoration: "none",
          }}
          onClick={() => setTab("/projects")}
        >
          <div
            className={[
              "header__tabs--tab",
              `${tab === "/projects" ? "header__tabs--active" : ""}`,
            ].join(" ")}
          >
            <h1>Projects</h1>
          </div>
        </Link>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
          }}
          onClick={() => setTab("/contact")}
        >
          <div
            className={[
              "header__tabs--tab",
              `${tab === "/contact" ? "header__tabs--active" : ""}`,
            ].join(" ")}
          >
            <h1>Contact</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
