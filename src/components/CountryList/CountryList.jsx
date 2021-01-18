import React, { useEffect } from 'react';
import _ from 'lodash';

import ListHeader from './ListHeader';
import './CountryList.css'

const CountryList = ({countries, getCountryList}) => {
  const [filters, setFilters] = React.useState({searchParam: null, region: null});

  useEffect(() => {
    getCountryList(filters.searchParam,  _.get(filters, 'region[0].label'))
  }, [filters, getCountryList])

  const countryThumbnail = (country) => {
    return (
      <div className={"country-thumbnail"} key={country.name}>
        <div className={"image-container"}>
          <img src={country.flag}/>
        </div>
        <div className={"country-details"}>
          <div className={"country-info"}>
            <div className={"country-name"}>
              <b>{country.name}</b>
            </div>
            <div>
              <b>Population: </b>{country.population}
            </div>
            <div>
              <b>Region: </b>{country.region}
            </div>
            <div>
              <b>Captial: </b>{country.capital}
            </div>
          </div>
        </div>
      </div>
    )
  };
    
  const renderCountries = (countryList) => {
    let result = [];
    countryList.forEach((country) => {
      result.push(countryThumbnail(country))
    });
    return result;
  }

  return (
    <div className={"list-container"}>
      <ListHeader filters={filters} setFilters={setFilters} />
      <div>
        {renderCountries(countries)}
      </div>
    </div>
  )
}

export default CountryList;
