import { CHANGE_LANGUAGE } from "../actions/types";

const INITIAL_STATE = {
  language : 'en'
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload};
  default:
    return state;
  }
}
