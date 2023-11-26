import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
} from './constants';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});
export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const deleteProductRequest = (id) => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});
