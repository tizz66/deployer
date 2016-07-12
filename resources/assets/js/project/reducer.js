import Immutable from 'immutable';

import * as actions from './actionTypes';

const initialState = Immutable.fromJS({
  active: null,
  showKey: false,
  fetching: false,
  servers: [],
  notifications: [],
  emails: [],
  heartbeats: [],
  sharedFiles: [],
  projectFiles: [],
  checkUrls: [],
  variables: [],
  commands: [],
  tags: [],
  branches: [],
});

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_PROJECT:
      return state.set('fetching', true);
    case actions.LOADED_PROJECT:
      return state.merge({
        fetching: false,
        servers: action.servers,
        notifications: action.notifications,
        emails: action.notifyEmails,
        heartbeats: action.heartbeats,
        sharedFiles: action.sharedFiles,
        projectFiles: action.projectFiles,
        links: action.checkUrls,
        variables: action.variables,
        commands: action.commands,
        tags: action.tags,
        branches: action.branches,
      });
    case actions.HIDE_SSH_KEY:
      return state.set('showKey', false);
    case actions.SHOW_SSH_KEY:
      return state.set('showKey', true);
    case actions.SET_ACTIVE_PROJECT:
      if (action.project === null) {
        return state.merge(...initialState);
      }

      return state.set('active', action.project);
    default:
      return state;
  }
}


/*
 {
 "deployments": {
 "total": 0,
 "per_page": 15,
 "current_page": 1,
 "last_page": 0,
 "next_page_url": null,
 "prev_page_url": null,
 "from": null,
 "to": null,
 "data": []
 },
 "today": 0,
 "last_week": 0,
 }
 */
