import { connect } from 'react-redux';

import CountryList from './CountryList.jsx';

import { getCountryList } from 'actions';

const mapStateToProps = (state) => {
  return {
    countries: state.CountryReducer.list
  }
}

const mapDispatchToProps = {
  getCountryList
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
