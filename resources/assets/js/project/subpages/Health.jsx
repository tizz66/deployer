import React from 'react';
import { connect } from 'react-redux';

import * as constants from '../constants';

const Health = (props) => (
  <div>
    <pre>{JSON.stringify(props.heartbeats)}</pre>
    <pre>{JSON.stringify(props.links)}</pre>
  </div>
);

const mapStateToProps = (state) => ({
  heartbeats: state.getIn([constants.NAME, 'heartbeats']),
  links: state.getIn([constants.NAME, 'links']),
});

export default connect(mapStateToProps)(Health);
