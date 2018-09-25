// 1) CONFIGURING OUR STORE AND THEN WE CAN CALL THIS FROM.
// OTHER FILE AND CREATE THE STORE.

// the store holds the whole state of my app
// to change the state of the store is dispatching an action.

// store is just a object with a few methods - getState(), dispatch(Action), subscribe(listener), replaceReducer(nextReducer).

// we need redux and react-redux.

// Dependencies
import { createStore } from 'redux';

// Root Reducer.
import rootReducer from '../reducers';

// simple function that is called configureStore, that receive a initialState
export default function configureStore(initialState) {

  // return the createdStore with rootReducer that have all the reducers and the initialState.
  return createStore(
    rootReducer,
    initialState
  );
}
