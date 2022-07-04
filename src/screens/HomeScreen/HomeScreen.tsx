import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getAlbums } from '~actions/albums';
import { albumsSelector } from '~selectors';
import { WhiteCard } from '~styles/containers';
import { HomeScreenProps } from '~types';
import { Card, Container, Header } from './styles';

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
    <Container>
      <Header>

      </Header>
      <Card>

      </Card>
    </Container>
  );
};
