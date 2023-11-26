import { produce } from 'immer';

import { FETCH_DETAIL_SUCCESS, PAYMENT_SUCCESS } from './constants';

export const initialState = {
  detailTrans: null,
  payment: null,
};

export const storedKey = [];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DETAIL_SUCCESS:
        draft.detailTrans = action.payload;
        break;
      case PAYMENT_SUCCESS:
        draft.payment = action.payload;
        break;
    }
  });

export default detailReducer;
