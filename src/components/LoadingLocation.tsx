import {View, Animated} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import EarthLoader from './EarthLoader';
import CustomButton from './CustomButton';
import clsx from 'clsx';

interface LoadingLocationProps {
  isLoading: boolean;
  loadingFadeAnim: Animated.Value;
}

export default function LoadingLocation({
  isLoading,
  loadingFadeAnim,
}: LoadingLocationProps) {
  return (
    <View
      className={clsx('relative', {
        'flex-1': isLoading,
      })}>
      <Animated.View
        style={{
          opacity: loadingFadeAnim,
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}>
        <View className="flex-1 items-center mt-4 mx-6">
          <CustomText className="text-xl">Camping Location Finder</CustomText>
          <CustomText className="text-accent mt-4" ff="M" fw="bold">
            Searching for your location...
          </CustomText>
          <View className="mt-20 mb-8">
            <EarthLoader />
          </View>
          <View className="mt-auto mb-8 w-full">
            <CustomButton
              title="Please wait..."
              onPress={() => {}}
              variant="secondary"
              // disabled
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}
