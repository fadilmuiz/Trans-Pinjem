import { createSelector } from 'reselect';
import { initialState } from './reducer';

const fetchDetailState = (state) => state.detail || initialState;

export const selectDetail = createSelector(fetchDetailState, (state) => state.detailTrans);
export const selectPayment = createSelector(fetchDetailState, (state) => state.payment);
