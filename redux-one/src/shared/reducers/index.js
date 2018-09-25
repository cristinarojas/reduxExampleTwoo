// 4) this is a special file to conbine and save all the reducers that we have
// the configureStore need this rootReducer.

// We need this method to combine the reducers.
import { combineReducers } from 'redux';

// here all the reducers that we want to pass to the configureStore.
import device from './deviceReducer';

// saving the combineReducers in one const.
const rootReducer = combineReducers({
  device // this is one reducer.
});

export default rootReducer; // export my const of rootReducer.
