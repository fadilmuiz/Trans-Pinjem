import { PAYMENT_REQUEST, PAYMENT_SUCCESS, FETCH_DETAIL_REQUEST, FETCH_DETAIL_SUCCESS } from './constants';

export const fetchDetailRequest = (id) => ({
  type: FETCH_DETAIL_REQUEST,
  id,
});

export const fetchDetailSuccess = (payload) => ({
  type: FETCH_DETAIL_SUCCESS,
  payload,
});

export const paymentRequest = (payload) => ({
  type: PAYMENT_REQUEST,
  payload
});

export const paymentSuccess = (payload) => ({
  type: PAYMENT_SUCCESS,
  payload,
});
