import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const paths = [
  'M29.4,-17.4C33.1,1.8,27.6,16.1,11.5,31.6C-4.7,47,-31.5,63.6,-43,56C-54.5,48.4,-50.7,16.6,-41,-10.9C-31.3,-38.4,-15.6,-61.5,-1.4,-61C12.8,-60.5,25.7,-36.5,29.4,-17.4Z',
  'M31.7,-55.8C40.3,-50,45.9,-39.9,49.7,-29.8C53.5,-19.8,55.5,-9.9,53.1,-1.4C50.6,7.1,43.6,14.1,41.8,27.6C40.1,41.1,43.4,61.1,37.3,67C31.2,72.9,15.6,64.8,1.5,62.2C-12.5,59.5,-25,62.3,-31.8,56.7C-38.5,51.1,-39.4,37.2,-49.3,26.3C-59.1,15.5,-78,7.7,-77.6,0.2C-77.2,-7.2,-57.4,-14.5,-49.3,-28.4C-41.2,-42.4,-44.7,-63,-38.5,-70.1C-32.2,-77.2,-16.1,-70.8,-2.3,-66.9C11.6,-63,23.1,-61.5,31.7,-55.8Z',
  'M30.6,-49.2C42.5,-46.1,57.1,-43.7,67.6,-35.7C78.1,-27.6,84.6,-13.8,80.3,-2.4C76.1,8.9,61.2,17.8,52.5,29.1C43.8,40.3,41.4,53.9,33.7,64C26,74.1,13,80.6,2.2,76.9C-8.6,73.1,-17.3,59,-30.6,52.1C-43.9,45.3,-61.9,45.7,-74.1,38.2C-86.4,30.7,-92.9,15.4,-88.6,2.5C-84.4,-10.5,-69.4,-20.9,-60.7,-34.6C-52.1,-48.3,-49.8,-65.3,-40.7,-70C-31.6,-74.8,-15.8,-67.4,-3.2,-61.8C9.3,-56.1,18.6,-52.3,30.6,-49.2Z',
  'M39.4,-66C48.6,-62.9,51.9,-47.4,52.9,-34.3C53.8,-21.3,52.4,-10.6,54.4,1.1C56.3,12.9,61.7,25.8,57.5,33.2C53.2,40.5,39.3,42.3,28.2,46C17,49.6,8.5,55.1,1.3,52.8C-5.9,50.5,-11.7,40.5,-23.6,37.2C-35.4,34,-53.3,37.5,-62,32.4C-70.7,27.4,-70.4,13.7,-72.4,-1.1C-74.3,-15.9,-78.6,-31.9,-73.3,-43C-68.1,-54.2,-53.3,-60.5,-39.5,-60.9C-25.7,-61.4,-12.9,-56,1.1,-58C15.1,-59.9,30.2,-69.2,39.4,-66Z',
];

const positions = [
  {translateY: -40, rotate: '-5deg'},
  {translateY: 60, rotate: '10deg'},
  {translateY: -20, rotate: '-15deg'},
  {translateY: 35, rotate: '5deg'},
];

const EarthLoader = () => {
  const translateX = useSharedValue(20);

  useEffect(() => {
    translateX.value = withRepeat(withTiming(-20, {duration: 5000}), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.earthLoader}>
        {paths.map((d, index) => {
          const animatedStyle = useAnimatedStyle(() => ({
            transform: [
              {translateX: translateX.value + index * 30 - 15},
              {translateY: positions[index].translateY},
              {rotate: positions[index].rotate},
            ],
          }));

          return (
            <Animated.View
              key={index}
              style={[styles.svgContainer, animatedStyle]}>
              <Svg viewBox="0 0 200 200" width="80" height="80">
                <Path d={d} fill="#7CC133" transform="translate(100, 100)" />
              </Svg>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  earthLoader: {
    width: 120,
    height: 120,
    backgroundColor: '#3344c1',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#fff',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  svgContainer: {
    position: 'absolute',
  },
});

export default EarthLoader;
