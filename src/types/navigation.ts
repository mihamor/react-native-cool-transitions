import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type HomeStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Album: { album: any };
  Photo: { photo: any };
};

export type WelcomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Welcome'>;
export type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
export type AlbumScreenProps = NativeStackScreenProps<HomeStackParamList, 'Album'>;
export type PhotoScreenProps = NativeStackScreenProps<HomeStackParamList, 'Photo'>;


