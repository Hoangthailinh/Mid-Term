import React from "react";
import "./Header.css"; // Import file CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Anonime</div>
      <nav className="nav">
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/list" className="nav-link">
          List anime
        </a>
      </nav>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search anime or movie"
        />
      </div>
    </header>
  );
};

export default Header;
