import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from 'react-router-dom';

import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Router>
          <Switch>
            <Route path="/:country">
              <CountryDetails />
            </Route>
            <Route path="/">
              <CountryList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
