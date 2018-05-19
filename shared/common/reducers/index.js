import { combineReducers } from 'redux';
import pcReducer from 'shared/pc/reducers';
import spReducer from 'shared/sp/reducers';

export default combineReducers({
  ...pcReducer,
  ...spReducer
});