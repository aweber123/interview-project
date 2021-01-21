import React from "react";
import classNames from 'classnames';
import { Button, SHAPE, SIZE, KIND } from "baseui/button";
import { Moon } from 'react-feather';

import './Header.css';

const Header = ({theme, toggleTheme}) => {
  return (<div 
    className={classNames({
      'header': true, 
      'dark-elements': theme === "dark",
      'light-elements': theme === "light",
    })}
  >
    <div className="header-content">
      <div className="title">
        Where in the world?
      </div>
      <div className="color-mode">
        {
          theme === "light" && <Button 
            kind={KIND.tertiary}
            size={SIZE.compact}
            shape={SHAPE.pill}
            onClick={() => toggleTheme()}
            startEnhancer={<Moon size={24} />}
          >
            Dark Mode
          </Button>
        }
        {
          theme === "dark" && <Button
            kind={KIND.tertiary}
            size={SIZE.compact}
            shape={SHAPE.pill} 
            onClick={() => toggleTheme()}
            startEnhancer={<Moon size={24} />}
          >
            Light Mode
          </Button>
        }
      </div>
    </div>
  </div>)
}

export default Header;