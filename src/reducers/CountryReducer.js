import { COUNTRY_ACTIONS } from 'actions';

const base = {
  list: [], 
  details: {}
};

const CountryReducer = (state = base, {type, payload}) => {
  if (type === COUNTRY_ACTIONS.COUNTRY_LIST_SUCCESS) {
    state = {
      ...state,
      list: payload.data
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_DETAILS_SUCCESS) {
    state = {
      ...state,
      details: payload.data[0]
    }
  }
  
  return state;
}

export default CountryReducer;
