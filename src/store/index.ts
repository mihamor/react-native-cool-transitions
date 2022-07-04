import { createStore, combineReducers } from 'redux';
import albums from '~reducers/albums';

const rootReducer = combineReducers(
  { count: albums }
);

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
