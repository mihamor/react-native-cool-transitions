import { State } from "~store";
import { createSelector } from 'reselect';

export const albumsSelector = (state: State) => state.albums;
export const albumByIdSelector = (id: number) => (
  createSelector(albumsSelector, (albums) => (
    albums.albums.find((album) => album.id === id)
  ))
);

