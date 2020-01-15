import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export const { Types, Creators } = createActions({
  inRequest: ['email', 'password'],
  inSuccess: ['token', 'user'],
  upRequest: ['firstName', 'lastName', 'email', 'phone', 'cpf', 'password'],
  failure: [],
});

const signInRequest = (state = INITIAL_STATE) => {
  return produce(state, draft => {
    draft.loading = true;
  });
};

const signInSuccess = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    draft.token = action.payload.token;
    draft.signed = true;
    draft.loading = false;
  });
};

const signFailure = (state = INITIAL_STATE) => {
  return produce(state, draft => {
    draft.loading = false;
  });
};

export const signOut = (state = INITIAL_STATE) => {
  return produce(state, draft => {
    draft.token = null;
    draft.signed = false;
  });
};

export default createReducer(INITIAL_STATE, {
  [Types.inRequest]: signInRequest,
  [Types.inSuccess]: signInSuccess,
  [Types.failure]: signFailure,
});
