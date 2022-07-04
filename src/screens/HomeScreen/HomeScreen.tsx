import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Api from '~api';

import { HomeScreenProps } from '~types';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const get = async () => {
     const albums = await Api.getAlbums();
     console.log('albums', albums);
    };
    get();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};
