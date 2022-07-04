import { runOnJS, SharedValue, useAnimatedReaction } from "react-native-reanimated"

export const useOnAnimationReachValue = <T>(value: SharedValue<T>, onValue: T, callback: () => void) => {
  useAnimatedReaction(
    () => value.value,
    (res: T) => {
      if (res === onValue) {
        runOnJS(callback)();
      }
    },
  );
};