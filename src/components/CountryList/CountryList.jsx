import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom'
import _ from 'lodash';

import ListHeader from './ListHeader';
import './CountryList.css'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CountryList = ({countries, getCountryList}) => {
  const [filters, setFilters] = React.useState({searchParam: null, region: null});
  const history = useHistory();
  const handleOnClick = useCallback(({name}) => history.push(`${name}`), [history]);

  useEffect(() => {
    getCountryList(filters.searchParam,  _.get(filters, 'region[0].label'))
  }, [filters, getCountryList])

  const countryThumbnail = (country) => {
    return (
      <div 
        className={"country-thumbnail"} 
        key={country.name} 
        onClick={() => handleOnClick(country)}
      >
        <div className={"image-container"}>
          <img src={country.flag} alt={country.name} />
        </div>
        <div className={"country-details"}>
          <div className={"country-info"}>
            <div className={"country-name"}>
              <b>{country.name}</b>
            </div>
            <div className="country-stats">
              <div>
                <b>Population: </b>{numberWithCommas(country.population)}
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
