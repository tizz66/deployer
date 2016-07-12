import 'isomorphic-fetch';

import * as actions from './actionTypes';

export function setProject(project) {
  return {
    type: actions.SET_ACTIVE_PROJECT,
    project,
  };
}

function receivedProjectData(response) {
  return {
    type: actions.LOADED_PROJECT,
    ...response,
  };
}

function isFetching() {
  return {
    type: actions.FETCH_PROJECT,
  };
}

export function fetchProject(project) {
  return (dispatch) => {
    dispatch(isFetching());

    return fetch(`/api/projects/${project.id}`, {
      credentials: 'same-origin',
    })
    .then(response => response.json())
    .then(json => dispatch(receivedProjectData(json)))
    .catch(error => console.log(error));
  };
}

export function showKey() {
  return {
    type: actions.SHOW_SSH_KEY,
  };
}

export function hideKey() {
  return {
    type: actions.HIDE_SSH_KEY,
  };
}
