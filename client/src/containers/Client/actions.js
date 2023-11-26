import {
  SET_LOGIN,
  SET_TOKEN,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '@containers/Client/constants';

export const setLogin = (login, token) => ({
  type: SET_LOGIN,
  login,
  token,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const registerRequest = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginRequest = (userData) => ({
  type: LOGIN_REQUEST,
  payload: userData,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
