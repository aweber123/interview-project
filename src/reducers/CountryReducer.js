import { COUNTRY_ACTIONS } from 'actions';

const base = {
  list: [],
  listFailure: false, 
  details: {}
};

const CountryReducer = (state = base, {type, payload}) => {
  if (type === COUNTRY_ACTIONS.COUNTRY_LIST_SUCCESS) {
    state = {
      ...state,
      list: payload.data,
      listFailure: false,
    }
  }
  if (type === COUNTRY_ACTIONS.COUNTRY_LIST_FAILURE) {
    state = {
      ...state,
      list: [],
      listFailure: true
    }
  }
  
  return state;
}

export default CountryReducer;
