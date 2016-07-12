import React from 'react';
import { connect } from 'react-redux';

import * as constants from '../constants';

const Notifications = (props) => (
  <div>
    <pre>{JSON.stringify(props.notifications)}</pre>
    <pre>{JSON.stringify(props.emails)}</pre>
  </div>
);

const mapStateToProps = (state) => ({
  notifications: state.getIn([constants.NAME, 'notifications']),
  emails: state.getIn([constants.NAME, 'emails']),
});

export default connect(mapStateToProps)(Notifications);
