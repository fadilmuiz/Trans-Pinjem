import { takeLatest, call, put } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { addTransApi } from '@domain/api';
import { ADDTRANS_REQUEST } from './constants';

function* handleAddForm(action) {
  try {
    const data = yield call(addTransApi, action.payload);
    toast.success('Add successful!');
  } catch (error) {
    if (error?.response?.data?.error) {
      toast.error(error?.response?.data?.error);
    } else {
      toast.error(error?.response?.data?.message);
    }
    // yield put(registerFailure(error.response.data.message));
    // yield put(registerFailure(error.response.data.error));
  }
}

export default function* addFormSaga() {
  yield takeLatest(ADDTRANS_REQUEST, handleAddForm);
}
