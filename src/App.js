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
      <Router>
        <Switch>
          <Route path="/:id">
            <CountryDetails />
          </Route>
          <Route path="/">
            <CountryList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
