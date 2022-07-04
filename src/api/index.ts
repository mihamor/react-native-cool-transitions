import axios from 'axios';
import { Album, Photo } from '~types/data';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response) return Promise.reject(err.response.data);
    if (err.request) return Promise.reject(err.request);
    return Promise.reject(err.message);
  }
);

class Api {
  static async getAlbums () {
    const data: Album[] = await instance.get('/albums');
    return data;
  }
  static async getPhotos (albumId: number) {
    const data: Photo[] = await instance.get(`/albums/${albumId}/photos`);
    return data;
  }
};

export default Api;
