import { createSelector } from 'reselect';
import { initialState } from './reducer';

const fetchHomeState = (state) => state.home || initialState;

export const selectTrans = createSelector(fetchHomeState, (state) => state.trans);
