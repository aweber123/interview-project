import { connect } from 'react-redux';

import CountryDetails from './CountryDetails.jsx';

import { getCountryDetails } from 'actions';

const mapStateToProps = (state) => {
  return {
    details: state.CountryReducer.details
  }
}

const mapDispatchToProps = {
  getCountryDetails
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);
