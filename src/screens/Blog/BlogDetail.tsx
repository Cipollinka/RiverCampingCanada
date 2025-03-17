import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import CustomText from '@/components/CustomText';
import {IBlogData} from '@/navigation/types';
import CustomButton from '@/components/CustomButton';
import {shareSafetyInfo} from '@/utils/shareSafety';
import ShareIcon from '@/assets/icons/share.svg';
import {useNavigation} from '@react-navigation/native';

export default function BlogDetail({route}: any) {
  const navigation = useNavigation();

  const data = route.params.blog as IBlogData;
  return (
    <ScreenWrapper>
      <Header />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-4">
          <CustomText className="text-2xl">{data.title}</CustomText>
          <CustomText ff="M" className="mt-4">
            {data.description}
          </CustomText>

          <View>
            {data.content.map((item, index) => (
              <View className="mt-4" key={index}>
                <CustomText ff="M" fw="bold" className="text-xl">
                  {index + 1}. {item.subTitle}
                </CustomText>
                <CustomText ff="M" className="mt-2">
                  {item.text}
                </CustomText>
              </View>
            ))}
          </View>

          <View className="flex-row justify-between my-4 gap-4">
            <CustomButton
              title="Back"
              onPress={() => navigation.goBack()}
              className="flex-1"
              variant="secondary"
            />
            <TouchableOpacity
              onPress={() => shareSafetyInfo(data.title, data.content)}
              className="bg-white w-[50px] h-[50px] items-center justify-center">
              <ShareIcon />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
