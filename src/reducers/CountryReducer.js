import { COUNTRY_ACTIONS } from 'actions';

const base = {
  list: [], 
  details: {},
  borders: []
};

const CountryReducer = (state = base, {type, payload}) => {
  if (type === COUNTRY_ACTIONS.COUNTRY_LIST_SUCCESS) {
    state = {
      ...state,
      list: payload.data
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_LIST_FAILURE) {
    state = {
      ...state,
      list: []
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_DETAILS_SUCCESS) {
    state = {
      ...state,
      details: payload.data[0]
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_DETAILS_FAILURE) {
    state = {
      ...state,
      details: {}
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_NAMES_SUCCESS) {
    state = {
      ...state,
      borders: payload.data
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_NAMES_FAILURE) {
    state = {
      ...state,
      borders: []
    }
  }
  
  return state;
}

export default CountryReducer;
