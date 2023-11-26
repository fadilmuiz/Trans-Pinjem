import { produce } from 'immer';

import {
  FETCH_DATA_SUCCESS
} from './constants';

export const initialState = {
  loading: false,
  error: null,
  trans: null
};

export const storedKey = [];

const editFormReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_DATA_SUCCESS:
        draft.trans = action.payload;
        break;
      default:
        return state;
    }
  });

export default editFormReducer;
