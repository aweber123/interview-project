import axios from 'axios';
import { successAction, errorAction } from 'actions/helpers/action';

export const COUNTRY_ACTIONS = {
  COUNTRY_LIST_SUCCESS: "COUNTRY_LIST_SUCCESS",
  COUNTRY_LIST_FAILURE: "COUNTRY_LIST_FAILURE",
  GET_COUNTRY_DETAILS: "GET_COUNTRY_DETAILS",
};

const axiosInstance = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/'
})

const countryListFilter = '?fields=name;flag;region;capital;population'

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

export const getCountryDetailsById = (email, password) => async (dispatch) => {
  try {
    const result = await axiosInstance.post('/account', { email, password });
    return dispatch(successAction(COUNTRY_ACTIONS.asdf, result))
  } catch(e) {
    return dispatch(errorAction(COUNTRY_ACTIONS.asdf, e))
  }
}

