import { View, Dimensions } from 'react-native';
import styled from 'styled-components';
import { Colours } from '~constants';
import { WhiteCard } from '~styles/containers';

const { height, width } = Dimensions.get('screen');
const HEADER_HEIGHT = height / 3;

export const Container = styled(View)`
  flex: 1;
`;

export const Header = styled(View)`
  background-color: ${Colours.primary};
  height: ${HEADER_HEIGHT};
`;

export const Card = styled(WhiteCard)`
  margin-top: -20px;
`;