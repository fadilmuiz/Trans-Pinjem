// dataSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { fetchDetailSuccess, paymentSuccess } from './actions';
import { FETCH_DETAIL_REQUEST, PAYMENT_REQUEST } from './constants';
import { paymentApi, fetchDetail } from '../../domain/api';

function* fetchDetailSaga({ id }) {
  try {
    const data = yield call(fetchDetail, id);
    // window.location.href = '/';
    yield put(fetchDetailSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

function* paymentSaga(data) {
  try {
    const response = yield call(paymentApi, data);
    yield put(paymentSuccess(response.token));
    window.snap.pay(response.token, {
      onSuccess() {
        toast.success('Successful!');
      },
      onPending(response) {
        toast.error('Pending Payment!');
      },
      onError(response) {
        toast.error('Error Payment!');
      },
      onClose() {
        toast.error('you closed the popup without finishing the payment!');
      },
    });
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export default function* detailSaga() {
  yield takeLatest(FETCH_DETAIL_REQUEST, fetchDetailSaga);
  yield takeLatest(PAYMENT_REQUEST, paymentSaga);
}
