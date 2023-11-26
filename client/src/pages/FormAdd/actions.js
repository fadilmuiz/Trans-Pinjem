import {
  ADDTRANS_REQUEST,
} from './constants';

export const addTransRequest = (payload) => ({
  type: ADDTRANS_REQUEST,
  payload,
});
