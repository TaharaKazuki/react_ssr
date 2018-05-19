import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'shared/common/reducers';

export default () => createStore(reducers, {}, applyMiddleware(thunk));