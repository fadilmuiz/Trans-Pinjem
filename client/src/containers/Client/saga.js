import { takeLatest, call, put } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { register, login } from '@domain/api';
import { REGISTER_REQUEST, LOGIN_REQUEST } from './constants';
import {
  registerSuccess,
  setLogin,
  loginSuccess,
  loginFailure
} from './actions';

function* handleRegister(action) {
  try {
    yield call(register, action.payload);
    yield put(registerSuccess());
    toast.success('Register successful!');
  } catch (error) {
    if (error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error(error.response.data.message);
    }
    // yield put(registerFailure(error.response.data.message));
    // yield put(registerFailure(error.response.data.error));
  }
}

function* handleLogin(action) {
  try {
    const response = yield call(login, action.payload);
    yield put(setLogin(true, response.token));
    yield put(loginSuccess(response));
    toast.success('Login successful!');
  } catch (error) {
    if (error.response.data.error) {
      toast.error(error.response.data.error);
    } else {
      toast.error(error.response.data.message);
    }
    // yield put(loginFailure(error.response.data.message));
    yield put(loginFailure(error.response.data.error));
  }
}

export default function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}
