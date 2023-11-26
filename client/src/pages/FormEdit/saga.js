import { takeLatest, call, put } from 'redux-saga/effects';
import toast from 'react-hot-toast';
import { editTrans, fetchDetail } from '@domain/api';
import { EDITTRANS_REQUEST, FETCH_DATA_REQUEST } from './constants';
import { fetchDataSuccess } from './actions';

function* handleEditForm(action) {
  try {
    const { formDataObj, id_trans } = action.payload;
    yield call(editTrans, { formDataObj, id_trans });
    toast.success('Edit successful!');
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

function* fetchEditDataSaga({ id }) {
  try {
    const data = yield call(fetchDetail, id);
    yield put(fetchDataSuccess(data));
  } catch (error) {
    toast.error(error.response.data.message);
  }
}

export default function* editFormSaga() {
  yield takeLatest(EDITTRANS_REQUEST, handleEditForm);
  yield takeLatest(FETCH_DATA_REQUEST, fetchEditDataSaga);
}
