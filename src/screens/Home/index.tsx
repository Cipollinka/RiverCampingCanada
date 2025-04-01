import CustomButton from '@/components/CustomButton';
import CustomText from '@/components/CustomText';
import Header from '@/components/Header';
import ScreenWrapper from '@/components/ScreenWrapper';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, ScrollView} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} className="mb-8">
        <View className="justify-center p-6 gap-2">
          <Image source={require('@/assets/images/screens/home.png')} />
          <CustomText className="text-xl">Welcome to Camping Canada</CustomText>
          <CustomText className="mt-2 text-subText" ff="M">
            Discover the perfect river camping spots in the most beautiful
            regions of Canada. Explore, plan, and enjoy nature safely with our
            helpful tips!
          </CustomText>
        </View>

        <View className="px-6 mb-4">
          <CustomText className="text-xl mb-6">Explore Categories:</CustomText>

          <View className="space-y-4 gap-2">
            <CustomButton
              title="Camping Location Finder"
              onPress={() => navigation.navigate('LocationFinder')}
            />
            <CustomButton
              title="Safety equipment"
              onPress={() => navigation.navigate('Safety')}
            />
            <CustomButton
              title="Interactive Map"
              onPress={() => navigation.navigate('Map')}
            />
            <CustomButton
              title="Camping Canada Blog"
              onPress={() => navigation.navigate('Blog')}
            />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
