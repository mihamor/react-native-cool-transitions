import { all, call, put, takeLatest } from "redux-saga/effects";

import Api from "~api";
import { albumsFailed, albumsSuccess, ALBUMS_GET } from "~actions/albums";
import { Album } from "~types/data";

function* getAlbumsSaga() {
  try {
    const albums: Album[] = yield call(Api.getAlbums);
    yield put(albumsSuccess(albums));
  } catch (e) {
    yield put(albumsFailed(e));
  }
}

function* albumsSaga() {
  yield all([takeLatest(ALBUMS_GET, getAlbumsSaga)]);
}

export default albumsSaga;
