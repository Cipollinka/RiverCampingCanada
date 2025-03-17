import {View, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import StepCounter from '@/components/StepCounter';

export default function Welcome4() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Image
        source={require('@/assets/images/welcome/4.png')}
        className="w-full h-1/2"
      />
      <Image
        source={require('@/assets/images/logo.png')}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[172px]"
      />

      <View className="bg-primary border-t border-t-white w-full p-6 flex-1">
        <CustomText className="text-xl">Explore with the Map</CustomText>
        <CustomText className="mt-4 mb-8 text-[#C5C5C5]" ff="M">
          Use our interactive map to find and explore top river camping
          locations.
        </CustomText>

        <View className="mt-auto mb-4">
          <CustomButton
            title="Next"
            onPress={() => navigation.navigate('Welcome5')}
          />
          <View className="mx-auto mt-8">
            <StepCounter step={4} total={5} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
