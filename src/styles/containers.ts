import { View, Text } from 'react-native';
import styled from 'styled-components';
import { Colours, Sizes } from '~constants';

export const DarkContainer = styled(View)`
  background-color: ${Colours.dark};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WhiteCard = styled(View)`
  background-color: ${Colours.light};
  border-top-left-radius: ${Sizes.s12};
  border-top-right-radius: ${Sizes.s12};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeadingLarge = styled(Text)`
  color: ${Colours.textLight};
  font-size: ${Sizes.s32};
  line-height: ${Sizes.s36};
  margin: ${Sizes.s12}px;
  text-transform: uppercase;
`;