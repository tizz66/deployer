import * as actions from './actionTypes';
import Immutable from 'immutable';

export function setButtons(buttons = []) {
  return {
    type: actions.SET_BUTTONS,
    buttons: Immutable.fromJS(buttons),
  };
}
