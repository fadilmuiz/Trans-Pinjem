import { produce } from 'immer';

import {
  SET_LOGIN,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '@containers/Client/constants';

export const initialState = {
  login: false,
  token: null,
  loading: false,
  error: null,
  selectUser: null
};

export const storedKey = ['token', 'login'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        draft.token = action.token;
        break;
      case REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
      case REGISTER_SUCCESS:
        return { ...state, loading: false };
      case REGISTER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  });

export default clientReducer;
