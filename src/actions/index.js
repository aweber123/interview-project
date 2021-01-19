import axios from 'axios';
import { successAction, errorAction } from 'actions/helpers/action';

export const COUNTRY_ACTIONS = {
  COUNTRY_LIST_SUCCESS: "COUNTRY_LIST_SUCCESS",
  COUNTRY_LIST_FAILURE: "COUNTRY_LIST_FAILURE",
  COUNTRY_DETAILS_SUCCESS: "COUNTRY_DETAILS_SUCCESS",
  COUNTRY_DETAILS_FAILURE: "COUNTRY_DETAILS_FAILURE",
};

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/'
})

const countryListFilter = '?fields=name;flag;region;capital;population'
const countryDetailsFilter = '?fields=name;flag;region;capital;population;subregion;nativeName;topLevelDomain;currencies;languages;borders'

export const getCountryList = (searchParam, region) => async (dispatch) => {
  try {
    if (searchParam && region) {
      return dispatch(errorAction(COUNTRY_ACTIONS.COUNTRY_LIST_FAILURE, 'Cannot have a searchParam & region simultaniously'))
    }

    if (searchParam) {
      const result = await axiosInstance.get(`/name/${searchParam}` + countryListFilter);
      return dispatch(successAction(COUNTRY_ACTIONS.COUNTRY_LIST_SUCCESS, result))
    } 
    
    if (region) {
      const result = await axiosInstance.get(`/region/${region}` + countryListFilter);
      return dispatch(successAction(COUNTRY_ACTIONS.COUNTRY_LIST_SUCCESS, result))
    }

    const result = await axiosInstance.get('/all' + countryListFilter);
    return dispatch(successAction(COUNTRY_ACTIONS.COUNTRY_LIST_SUCCESS, result))
    
  } catch(e) {
    return dispatch(errorAction(COUNTRY_ACTIONS.COUNTRY_LIST_FAILURE, e))
  }
}

export const getCountryDetails = (countryName) => async (dispatch) => {
  try {
    const result = await axiosInstance.get(`/name/${countryName}` + countryDetailsFilter);
    return dispatch(successAction(COUNTRY_ACTIONS.COUNTRY_DETAILS_SUCCESS, result))
  } catch(e) {
    return dispatch(errorAction(COUNTRY_ACTIONS.COUNTRY_DETAILS_FAILURE, e))
  }
}

