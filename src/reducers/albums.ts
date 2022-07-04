import { AlbumActions, ALBUMS_FAILED, ALBUMS_GET, ALBUMS_SUCCESS } from "~actions/albums";
import { Album } from "~types/data";

export interface AlbumsState {
  albums: Album[],
  loading: boolean,
  error?: Error | null,
};

const initialState: AlbumsState = {
  albums: [],
  loading: false,
  error: null,
};

export default function albumsReducer(
  state = initialState,
  action: AlbumActions
): AlbumsState {
  switch (action.type) {
    case ALBUMS_GET:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        albums: action.payload,
      };
    case ALBUMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}