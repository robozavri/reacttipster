import { combineReducers } from 'redux'
import user from './user'
import language from './language'
import authReducer from './auth-reducer';
import errorsReducer from './errors-reducer';

export default combineReducers({
   auth: authReducer,
  errors: errorsReducer,
  user,
  language
})

