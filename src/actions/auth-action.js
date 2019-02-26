import axios from 'axios'
import setAuthToken from '../utils/set-auth-token'
import jwtDecode from 'jwt-decode'

import { SET_CURRENT_USER, LOGOUT_USER, GET_ERRORS } from "./types";

const authSequence = (token) => {
  localStorage.setItem('jwtToken', token);
  setAuthToken(token);
}

// export const signup = (formProps, callback) => async dispatch => {
//   try {
//     const response = await axios.post('/users', formProps)
//     const token = response.data;
//     authSequence(token);
//     const decoded = jwtDecode(token)
//     decoded.token = token

//     dispatch(setCurrentUser(decoded));
//     // callback for route redirect
//     callback();
//   } catch (e) {
//     dispatch({ type: GET_ERRORS, payload: e.response.data })
//   }
// };

export const login = (formProps, callback) => {
  console.log(formProps);
//  აქ ასინქროუნლად უნდა დავაოგინო და დავარეგისტრირო
// ამიტომ async await  დამჭიტდეაბა და იმისთვის რომ ექშენი ასინქრონული იყოს 
// thunk  middleware  უნდა დავაინქლუდო !!!!!!!!!!!!!!!!!!1
  return;
};



// export const login = (formProps, callback) => async dispatch => {
//   console.log(formProps);
//   return;

//   try {
//     const response = await axios.post('/users/login', formProps)
//     const token = response.data;
//     authSequence(token);
//     const decoded = jwtDecode(token)
//     decoded.token = token
//     dispatch(setCurrentUser(decoded));
//     // callback for route redirect
//     callback();
//   } catch (e) {
//     dispatch({ type: GET_ERRORS, payload: e.response.data })
//   }
// };

export const logout = (callback) => async dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}

export const setCurrentUser = decoded =>  {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
