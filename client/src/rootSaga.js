import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import registerSaga from '@containers/Client/saga';
// import loginSaga from '@pages/Login/saga';
import homeSaga from '@pages/Home/saga';
import detailSaga from '@pages/Detail/saga';
import addFormSaga from '@pages/FormAdd/saga';
import editFormSaga from '@pages/FormEdit/saga';


export default function* rootSaga() {
  yield all([
    appSaga(),
    registerSaga(),
    homeSaga(),
    detailSaga(),
    addFormSaga(),
    editFormSaga(),
  ]);
}
