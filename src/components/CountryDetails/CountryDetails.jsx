import React, { useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Button, SIZE, SHAPE, KIND } from 'baseui/button';
import { Spinner } from "baseui/spinner";
import ArrowLeft from 'baseui/icon/arrow-left';

import './CountryDetails.css'

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CountryDetails = ({details, borders, getCountryDetails, getCountryNamesByCode}) => {
  const history = useHistory();
  const { country } = useParams();
  const goToList = useCallback(() => history.push('/'), [history]);
  const gotoCountry = useCallback(({name}) => history.push(`${name}`), [history]);


  useEffect(() => {
    getCountryDetails(country)
  }, [country, getCountryDetails]);

  useEffect(() => {
    if (details.borders) {
      getCountryNamesByCode(details.borders)
    }
  }, [details, getCountryNamesByCode]);

  
  if (country !== details.name) {
    return <div className="center">
      <Spinner size={75}/>
    </div>
  } 

  return (<div className="details-container">
    <div className="details-header">
      <div className="button-container">
        <Button 
          startEnhancer={() => <ArrowLeft size={24} />}
          onClick={() => goToList()}
          size={SIZE.compact}
          shape={SHAPE.pill}  
          kind={KIND.secondary}
        >
          Back
        </Button>
      </div>
    </div>
    <div className="details-body">
      <div className="flag-container">
        <img src={details.flag}></img>
      </div>
      <div className="country-details-container">
        <div className="country-name">
          {details.name}
        </div>
        <div className="country-details-stats">
          <div className="left">
            <div>
              <b>Native Name:</b> {details.nativeName} 
            </div>
            <div>
              <b>Population:</b> {details.population && numberWithCommas(details.population)} 
            </div>
            <div>
              <b>Region: </b> {details.region}
            </div>
            <div>
              <b>Sub Region: </b> {details.subregion} 
            </div>
            <div>
              <b>Capital: </b> {details.capital} 
            </div>
          </div>
          <div className="right">
            <div>
              <b>Top Level Domain:</b> { details.topLevelDomain && details.topLevelDomain.join(", ")} 
            </div>
            <div>
              <b>Currencies:</b> {details.currencies && details.currencies.reduce((str, currency, index) => {
                str += currency.name 
                if (index < details.currencies.length - 1 ) {
                  str += ', ';
                }
                return str
              }, "")} 
            </div>
            <div>
              <b>Languages:</b> {details.languages && details.languages.reduce((str, language, index) => {
                str += `${language.name}`;
                if (index < details.languages.length - 1 ) {
                  str += ', ';
                }
                return str
              }, "")} 
            </div>
          </div>
        </div>
        <div className="country-details-neighbors">
          <b>Border Countries: </b> {borders && borders.reduce((arr, border) => {
            arr.push(
            <Button 
              onClick={() => gotoCountry(border)}
              kind={KIND.secondary}
              size={SIZE.mini}
              shape={SHAPE.pill}
            >{border.name}</Button>)   
            return arr
          }, [])}
        </div>
      </div>
    </div>
  </div>)
}

export default CountryDetails;
