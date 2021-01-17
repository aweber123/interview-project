import React, { useEffect } from 'react';
import _ from 'lodash';

import ListHeader from './ListHeader';

const CountryList = ({countries, getCountryList}) => {
  const [filters, setFilters] = React.useState({searchParam: null, region: null});

  useEffect(() => {
    getCountryList();
  }, [getCountryList])

  useEffect(() => {
    const region = _.get(filters, 'region[0].label');
    getCountryList(filters.searchParam, region)
  }, [filters, getCountryList])

  const countryThumbnail = (country) => {
    return (<div key={country.name}>{country.name}</div>)
  };
    
  const renderCountries = (countryList) => {
    let result = [];
    countryList.forEach((country) => {
      result.push(countryThumbnail(country))
    });
    return result;
  }

  return (
    <div>
      <ListHeader filters={filters} setFilters={setFilters} />
      <div>
        {renderCountries(countries)}
      </div>
    </div>
  )
}

export default CountryList;
