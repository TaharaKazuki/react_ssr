/* Ducks (Action/ActionCreator/reducers) */
import 'babel-polyfill';
import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const FETCH = 'FETCH';
const FETCH_USERS = FETCH + '_USERS';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');
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