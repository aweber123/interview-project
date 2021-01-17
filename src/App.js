import './App.css';

import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <div> 
        {/* Eventually use react-router here */}
        <CountryList />
        <CountryDetails />
      </div>
    </div>
  );
}

export default App;
