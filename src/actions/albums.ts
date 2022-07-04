import { ActionCreator } from "redux";
import { Album } from "~types/data";

export const ALBUMS_GET = 'ALBUMS_GET';
export const ALBUMS_SUCCESS = 'ALBUMS_SUCCESS';
export const ALBUMS_FAILED = 'ALBUMS_FAILED';

interface GetAlbumsAction {
  type: typeof ALBUMS_GET,
};

interface AlbumsSuccessAction {
  type: typeof ALBUMS_SUCCESS,
  payload: Album[],
};

interface AlbumsFailedAction {
  type: typeof ALBUMS_FAILED,
  payload: Error,
};

export type AlbumActions = GetAlbumsAction
| AlbumsSuccessAction
| AlbumsFailedAction;

export const getAlbums: ActionCreator<GetAlbumsAction> = () => ({
  type: ALBUMS_GET
});

export const albumsSuccess: ActionCreator<AlbumsSuccessAction> = (albums: Album[]) => ({
  type: ALBUMS_SUCCESS,
  payload: albums,
});

export const albumsFailed: ActionCreator<AlbumsFailedAction> = (error: Error) => ({
  type: ALBUMS_FAILED,
  payload: error,
});
