import React from 'react';
import classNames from 'classnames';

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import {
  BaseProvider, 
  createTheme, 
  DarkTheme,
  LightTheme
} from 'baseui';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

const engine = new Styletron();

const App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      document.getElementsByTagName("body")[0].classList.remove("light-background");
      document.getElementsByTagName("body")[0].classList.add("dark-background");
    }
    else {
      setTheme("light")
      document.getElementsByTagName("body")[0].classList.remove("dark-background");
      document.getElementsByTagName("body")[0].classList.add("light-background");
    }
  }

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <div className={classNames({
          'App': true,
          'dark-text': theme === "dark",
          'light-text': theme === "light",
          'dark-background': theme === "dark",
          'light-background': theme === "light"
        })}>
          <Header theme={theme} toggleTheme={toggleTheme}/>
          <div className="body">
            <Router>
              <Switch>
                <Route path="/:country">
                  <CountryDetails theme={theme} />
                </Route>
                <Route path="/">
                  <CountryList theme={theme} />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
