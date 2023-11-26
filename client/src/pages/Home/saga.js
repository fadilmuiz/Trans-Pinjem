// dataSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { fetchDataSuccess, fetchDataRequest } from './actions';
import { FETCH_DATA_REQUEST, DELETE_PRODUCT_REQUEST } from './constants';
import { fetchApi, deleteTransApi } from '../../domain/api';

function* fetchDataSaga() {
  try {
    const data = yield call(fetchApi);
    // window.location.href = '/';
    yield put(fetchDataSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

function* handleDeleteProduct(action) {
  try {
    yield call(deleteTransApi, action.payload);
    yield put(fetchDataRequest());
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export default function* homeSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
  yield takeLatest(DELETE_PRODUCT_REQUEST, handleDeleteProduct);
}
