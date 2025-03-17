import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import CustomText from '@/components/CustomText';
import {ISafetyData} from '@/navigation/types';
import CustomButton from '@/components/CustomButton';
import ShareIcon from '@/assets/icons/share.svg';
import {shareSafetyInfo} from '@/utils/shareSafety';

import safety from '@/data/safety.json';
import {useNavigation} from '@react-navigation/native';
import {SafetyImages} from '@/utils/safety';

interface SafetyItemProps {
  onShare: (title: string, description: ISafetyData['description']) => void;
  onReadMore: () => void;
  data: ISafetyData;
}

const SafetyCard = ({onReadMore, onShare, data}: SafetyItemProps) => {
  return (
    <View className="border border-white">
      <Image source={SafetyImages[data.image]} className="w-full h-[162px]" />
      <View className="p-4 bg-primary">
        <CustomText ff="M" fw="semibold">
          {data.title}
        </CustomText>
        <View className="flex-row justify-between mt-4 gap-4">
          <CustomButton
            className="flex-1"
            title="Read Now"
            onPress={onReadMore}
            variant="secondary"
          />
          <TouchableOpacity
            onPress={() => onShare(data.title, data.description)}
            className="bg-white w-[50px] h-[50px] items-center justify-center">
            <ShareIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function SafetyScreen() {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <Header />

      <ScrollView className="flex-1 mx-4" showsVerticalScrollIndicator={false}>
        <CustomText className="text-xl my-4">Safety Equipment</CustomText>

        <View className="gap-3 mb-4">
          {safety.map(data => (
            <SafetyCard
              key={data.id}
              onReadMore={() =>
                navigation.navigate('SafetyDetail', {safety: data})
              }
              onShare={shareSafetyInfo}
              data={data}
            />
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
