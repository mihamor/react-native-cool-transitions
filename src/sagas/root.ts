import { all, fork } from 'redux-saga/effects';
import albums from './albums';

export function* rootSaga() {
  yield all([fork(albums)]);
}
