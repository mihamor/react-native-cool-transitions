import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getAlbums } from '~actions/albums';
import { albumsSelector } from '~selectors';
import { HomeScreenProps } from '~types';

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [initialRender, setInitialRender] = useState(true);
  const { albums, loading, error } = useSelector(albumsSelector);
  const dispatch = useDispatch();

  const showSpinner = initialRender || loading;

  useEffect(() => {
    setInitialRender(false);
    dispatch(getAlbums());
  }, []);

  console.log(albums, loading, error);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {showSpinner && <ActivityIndicator />}
      {!showSpinner && (
        <FlatList 
          data={albums}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}
    </View>
  );
};
