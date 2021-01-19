import React from "react";
import './Header.css';

const Header = () => {
  return (<div className="header">
    <div className="header-content">
      <div className="title">
        Where in the world?
      </div>
      <div className="color-mode">
        <button>
          Dark Mode
        </button>
        <button>
          Light Mode
        </button>
      </div>
    </div>
  </div>)
}

export default Header;