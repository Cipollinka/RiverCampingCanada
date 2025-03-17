import {Animated, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import {ILocation} from '@/navigation/types';
import CustomText from '@/components/CustomText';
import LocationCard from '@/components/LocationCard';
import CustomButton from '@/components/CustomButton';
import EarthLoader from '@/components/EarthLoader';
import clsx from 'clsx';

export default function LocationDetail({route}: any) {
  const location = route.params.location as ILocation;
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const item = location.items[currentItemIndex || 0];
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchAgain = () => {
    setIsLoading(true);

    setTimeout(() => {
      setCurrentItemIndex(prev => (prev + 1) % location.items.length);
      setIsLoading(false);
    }, 1000);
  };

  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const loadingFadeAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: isLoading ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(loadingFadeAnim, {
        toValue: isLoading ? 1 : 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, [isLoading, fadeAnim, loadingFadeAnim]);

  return (
    <ScreenWrapper>
      <Header />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1 items-center mt-4 gap-2 mb-4">
          <CustomText className="text-xl">{location.title}</CustomText>
          <CustomText ff="M" fw="bold" className="text-accent">
            {isLoading ? 'Searching Locations for you...' : ' Search Results:'}
          </CustomText>

          <View
            className={clsx('relative', {
              'flex-1': isLoading,
            })}>
            <Animated.View
              style={{
                opacity: loadingFadeAnim,
                position: 'absolute',
                top: 0,
                left: 16,
                right: 16,
              }}>
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
            </Animated.View>
          </View>

          <Animated.View
            style={{
              opacity: fadeAnim,
              flex: !isLoading ? 1 : 0,
            }}>
            <View className="m-4">
              <LocationCard location={item} />
            </View>

            <View className="m-4 px-4">
              <CustomButton
                className="w-full"
                variant="secondary"
                title="Search Again"
                onPress={handleSearchAgain}
              />
            </View>
          </Animated.View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
