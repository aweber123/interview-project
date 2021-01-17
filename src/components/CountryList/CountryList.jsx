import React from 'react';
import ListHeader from './ListHeader';

const fakeList = [
  {country: "USA", populatin: 1234, capital: "Washington D.C."},
  {country: "USA2", populatin: 1234, capital: "Washington D.C."}
];

const CountryList = () => {
  const countryThumbnail = ({country}) => (<div>{country}</div>);
  
  const renderCountries = (countryList) => {
    let result = [];
    countryList.forEach((country) => {
      result.push(countryThumbnail(country))
    });
    return result;
  }

  return (<div>
    <ListHeader />
    <div>
      {renderCountries(fakeList)}
    </div>
  </div>)
};

export default CountryList;