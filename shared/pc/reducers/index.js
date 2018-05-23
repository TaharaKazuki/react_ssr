/* PC combineReducer */
import { combineReducers } from 'redux';
import commonReducers from 'shared/common/reducers';

export default combineReducers({
  ...commonReducers
});