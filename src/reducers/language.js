import { CHANGE_LANGUAGE } from "../actions/types";

const INITIAL_STATE = {
  language : 'en',
  translate : {
      topAdvices : {en:'Top advices',ge:'საიტი გირჩევთ'},
      topTipsterAdvice : {en:'Top 5 users advice',ge:'ტოპ ტიპსტერები გირჩევენ'},
  },

}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {...state, language: action.payload};
  default:
    return state;
  }
}
