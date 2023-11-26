import {
  EDITTRANS_REQUEST,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS
} from './constants';

export const editTransRequest = (payload) => ({
  type: EDITTRANS_REQUEST,
  payload,
});

export const fetchDataRequest = (id) => ({
  type: FETCH_DATA_REQUEST,
  id
});

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});
