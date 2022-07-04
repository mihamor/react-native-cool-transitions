import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Animated, { useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useOnAnimationReachValue } from '~hooks/animation';

import { DarkContainer, HeadingLarge } from '~styles/containers';
import { WelcomeScreenProps } from '~types';
import { AppName } from './styles';

const DURATION = 700;

const AnimatedHeading = Animated.createAnimatedComponent(HeadingLarge);

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const opacityWelcome = useSharedValue(0);
  const opacityExplorer = useSharedValue(0);

  useEffect(() => {
    opacityWelcome.value = withTiming(1, {
      duration: DURATION,
    });
  }, []);

  useOnAnimationReachValue(opacityWelcome, 1, () => {
    opacityExplorer.value = withTiming(1, {
      duration: DURATION,
    });
  });

  useOnAnimationReachValue(opacityExplorer, 1, () => {
    navigation.navigate('Home');
  });

  const welcomeStyle = useAnimatedStyle(() => ({
    opacity: opacityWelcome.value,
  }));

  const explorerStyle = useAnimatedStyle(() => ({
    opacity: opacityExplorer.value,
  }));

  return (
    <DarkContainer>
      <StatusBar barStyle="light-content" />
      <AnimatedHeading style={welcomeStyle}>Welcome</AnimatedHeading>
      <AnimatedHeading style={explorerStyle}>To the <AppName>Explorer</AppName></AnimatedHeading>
    </DarkContainer>
  );
};
function runOnJs(showExplorer: () => void): import("react-native-reanimated").AnimationCallback | undefined {
  throw new Error('Function not implemented.');
}

