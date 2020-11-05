import { combineReducers } from 'redux';

import WebReducer from './WebReducer'

export default combineReducers({
    website: WebReducer
});
