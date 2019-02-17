import { SET_CURRENT_USER, LOGOUT_USER } from "../actions/types";

const INITIAL_STATE = {
  loggedIn: false,
  user: '',
  age: '22',
  nmae: 'niko',
  surename: 'dzodzishvili'
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {...state, loggedIn: !isEmpty(action.payload), user: action.payload};
  default:
    return state;
  }
}
