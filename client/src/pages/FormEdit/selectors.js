import { createSelector } from 'reselect';
import { initialState } from './reducer';

const fetchEditState = (state) => state.edit || initialState;

export const selectTrans = createSelector(fetchEditState, (state) => state.trans);
