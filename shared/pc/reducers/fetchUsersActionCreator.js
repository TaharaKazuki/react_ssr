/* Ducks (Action/ActionCreator/reducers) */
import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const FETCH = 'FETCH';
const FETCH_USERS = `${FETCH}_USERS`;

export const fetchUSers = () => async dispatch => {
  const res = await axios.get('/https://react-ssr-api.herokuapp.com/users');
  dispatch(createAction(FETCH_USERS)({data:{'sample':res}}));
};

const initState = {
  app:{}
};
export default handleActions({
  [FETCH_USERS]: (state, {payload:{data}}) => ({
    ...state,
    ...data
  }),
},initState);