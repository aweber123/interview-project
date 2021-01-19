import React, { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Button, SIZE, SHAPE } from 'baseui/button';
import ArrowLeft from 'baseui/icon/arrow-left';

import './CountryDetails.css'

const CountryDetails = ({details, getCountryDetails}) => {
  const history = useHistory();
  const { country } = useParams();
  const handleOnClick = useCallback(() => history.push('/'), [history]);

  useEffect(() => {
    getCountryDetails(country)
  }, [country, getCountryDetails]);

  return (<div>
    <div className={'details-header'}>
      <div className={'button-container'}>
        <Button 
          startEnhancer={() => <ArrowLeft size={24} />}
          onClick={() => handleOnClick()}
          size={SIZE.compact}
          shape={SHAPE.pill}  
        >
          Back
        </Button>
      </div>
    </div>
    {details.name}
  </div>)
}

export default CountryDetails;