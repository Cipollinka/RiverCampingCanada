import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import {SafetyImages} from '@/utils/safety';
import CustomText from '@/components/CustomText';
import {ISafetyData} from '@/navigation/types';
import CustomButton from '@/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import ShareIcon from '@/assets/icons/share.svg';
import {shareSafetyInfo} from '@/utils/shareSafety';

export default function SafetyDetail({route}: any) {
  const data = route.params.safety as ISafetyData;
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Header />

      <ScrollView className="flex-1 mx-4" showsVerticalScrollIndicator={false}>
        <View className="mx-2 mt-4 mb-6">
          <Image
            source={SafetyImages[data.image]}
            className="w-full h-[134px]"
          />

          <CustomText className="text-2xl mt-4">{data.title}</CustomText>

          {data.description.map((item, index) => (
            <View className="mt-4" key={index}>
              <CustomText ff="M" fw="bold" className="text-xl">
                {index + 1}. {item.subTitle}
              </CustomText>
              <CustomText ff="M" className="mt-2">
                {item.text}
              </CustomText>
            </View>
          ))}

          <View className="flex-row justify-between mt-4 gap-4">
            <CustomButton
              title="Back"
              onPress={() => navigation.goBack()}
              className="flex-1"
              variant="secondary"
            />
            <TouchableOpacity
              onPress={() => shareSafetyInfo(data.title, data.description)}
              className="bg-white w-[50px] h-[50px] items-center justify-center">
              <ShareIcon />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
