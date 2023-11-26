import { produce } from 'immer';

import { FETCH_DATA_SUCCESS, PAYMENT_SUCCESS } from './constants';

export const initialState = {
  trans: null,
  payment: null,
};

export const storedKey = ['trans'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        draft.trans = action.payload;
        break;
      case PAYMENT_SUCCESS:
        draft.payment = action.payload;
        break;
    }
  });

export default homeReducer;
