import React from 'react';
import { connect } from 'react-redux';

import * as constants from '../constants';

const Servers = (props) => (
  <pre>{JSON.stringify(props.servers)}</pre>
);

const mapStateToProps = (state) => ({
  servers: state.getIn([constants.NAME, 'servers']),
});

export default connect(mapStateToProps)(Servers);
