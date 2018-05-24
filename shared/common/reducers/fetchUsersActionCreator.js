/* Ducks (Action/ActionCreator/reducers) */
import 'babel-polyfill';
import { createAction, handleActions } from 'redux-actions';

const FETCH = 'FETCH';
const FETCH_USERS = FETCH + '_USERS';

export const fetchUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');
  dispatch(createAction(FETCH_USERS)({data:{userList:res.data}}));
};

const initState = {
  userList:{},
};

export default handleActions({
  [FETCH_USERS]: (state, {payload:{data}}) => {
    return {
      ...state,
      ...data
    }
  },
},initState);