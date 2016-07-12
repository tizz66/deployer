import React from 'react';
import { connect } from 'react-redux';

import * as constants from '../constants';

const Commands = (props) => (
  <div>
    <pre>{JSON.stringify(props.commands)}</pre>
    <pre>{JSON.stringify(props.variables)}</pre>
  </div>
);

const mapStateToProps = (state) => ({
  commands: state.getIn([constants.NAME, 'commands']),
  variables: state.getIn([constants.NAME, 'variables']),
});

export default connect(mapStateToProps)(Commands);
