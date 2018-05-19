import { combineReducers } from 'redux';
import pcReducer from 'shared/pc/reducers';
import spReducer from 'shared/sp/reducers';
const { DEVICE } = process.env;
const deviceReducers = DEVICE === 'pc' ? pcReducer : spReducer;

export default combineReducers({
  ...deviceReducers,
});