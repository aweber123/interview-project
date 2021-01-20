import { connect } from 'react-redux';

import CountryDetails from './CountryDetails.jsx';

import { getCountryDetails, getCountryNamesByCode } from 'actions';

const mapStateToProps = (state) => {
  return {
    details: state.CountryReducer.details,
    borders: state.CountryReducer.borders,
  }
}

const mapDispatchToProps = {
  getCountryDetails,
  getCountryNamesByCode
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetails);
