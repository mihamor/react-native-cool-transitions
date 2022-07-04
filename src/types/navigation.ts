import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Home: undefined;
  Album: { album: any };
  Photo: { photo: any };
};

export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
export type AlbumScreenProps = NativeStackScreenProps<HomeStackParamList, 'Album'>;
export type PhotoScreenProps = NativeStackScreenProps<HomeStackParamList, 'Photo'>;


