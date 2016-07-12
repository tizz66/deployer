import React from 'react';
import { connect } from 'react-redux';

import * as constants from '../constants';

const Files = (props) => (
  <div>
    <pre>{JSON.stringify(props.sharedFiles)}</pre>
    <pre>{JSON.stringify(props.projectFiles)}</pre>
  </div>
);

const mapStateToProps = (state) => ({
  sharedFiles: state.getIn([constants.NAME, 'sharedFiles']),
  projectFiles: state.getIn([constants.NAME, 'projectFiles']),
});

export default connect(mapStateToProps)(Files);
