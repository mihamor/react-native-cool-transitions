import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import albums, { AlbumsState } from '~reducers/albums';
import { rootSaga } from '~sagas/root';

export interface State { 
  albums: AlbumsState,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers<State>(
  { albums }
);

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
