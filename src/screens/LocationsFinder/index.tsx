import React, {useMemo, useState} from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import CustomText from '@/components/CustomText';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import clsx from 'clsx';
import {LOCATIONS} from '@/utils/locations';
import LocationsIcon from '@/assets/icons/location.svg';
import CustomButton from '@/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import EarthLoader from '@/components/EarthLoader';
import {ILocation} from '@/navigation/types';
import LoadingLocation from '@/components/LoadingLocation';

interface LocationItemProps {
  title: string;
  image: ImageSourcePropType;
  onPress: () => void;
  isSelected?: boolean;
}
const LocationItem = ({
  title,
  image,
  onPress,
  isSelected,
}: LocationItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={clsx('relative w-[152px] h-[152px] border-2', {
        'border-white': !isSelected,
        'border-action': isSelected,
      })}>
      <Image className="absolute inset-0 w-full h-full" source={image} />

      <View className="mt-auto bg-primary/80 py-3 w-full">
        <CustomText ff="M" fw="semibold" className="mx-auto">
          {title}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

export default function LocationsFinder() {
  const navigation = useNavigation();
  const [currentSelection, setCurrentSelection] =
    React.useState<ILocation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fadeAnim = React.useRef(new Animated.Value(1)).current;
  const loadingFadeAnim = React.useRef(new Animated.Value(0)).current;

  const locationValues = useMemo(() => Object.values(LOCATIONS), []);

  React.useEffect(() => {
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

  const handleStartSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (!currentSelection) return;
      navigation.navigate('LocationDetail', {location: currentSelection});
    }, 1500);
  };

  return (
    <ScreenWrapper>
      <Header />
      <LoadingLocation
        isLoading={isLoading}
        loadingFadeAnim={loadingFadeAnim}
      />

      <Animated.View
        style={{
          opacity: fadeAnim,
          flex: !isLoading ? 1 : 0,
        }}>
        <View className="flex-1 mx-6 mt-4">
          <View className="items-center gap-2">
            <CustomText className="text-xl">Camping Location Finder</CustomText>
            <CustomText className="text-accent" ff="M" fw="bold">
              Choose your Region:
            </CustomText>
          </View>

          <View className="flex-row flex-wrap gap-2 justify-center mt-6">
            {locationValues.map(item => (
              <LocationItem
                key={item.id}
                isSelected={item.id === currentSelection?.id}
                title={item.title}
                image={item.image}
                onPress={() => setCurrentSelection(item)}
              />
            ))}
          </View>
          <View className="mt-auto mb-8">
            <CustomButton
              className="w-full"
              disabled={!currentSelection}
              title="Search Camping Location"
              Icon={<LocationsIcon />}
              onPress={handleStartSearch}
              variant="secondary"
            />
          </View>
        </View>
      </Animated.View>
    </ScreenWrapper>
  );
}
