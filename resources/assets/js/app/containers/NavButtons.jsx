import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import NavButtonsComponent from '../components/NavButtons';
import * as constants from '../../navigation/constants';

const NavButtons = (props) => {
  //console.log( props.buttons );
  return (<NavButtonsComponent {...props} />);
};

NavButtons.propTypes = {
  buttons: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    //console.log( state.getIn([constants.NAME, 'buttons']) );
    //console.log( typeof state.getIn([constants.NAME, 'buttons']) );
    return {
      buttons: state.getIn([constants.NAME, 'buttons']).toJS(),
    };
};

export default connect(mapStateToProps)(NavButtons);
