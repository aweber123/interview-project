import './App.css';

import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <CountryList />
      <CountryDetails />
    </div>
  );
}

export default App;
