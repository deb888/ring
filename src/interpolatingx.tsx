import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
const InterPolateX= () => {
  const translation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        transform: [
          { translateX: translation },
        ],
        backgroundColor: translation.interpolate({
            inputRange: [0, 100],
            outputRange: ['orange', 'blue'],
          }),
      }}
    />
  );
}
export default InterPolateX;