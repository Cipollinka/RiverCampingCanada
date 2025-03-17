import {View, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import CustomText from '@/components/CustomText';
import {IBlogData} from '@/navigation/types';
import CustomButton from '@/components/CustomButton';
import ShareIcon from '@/assets/icons/share.svg';
import blog from '@/data/blog.json';
import {useNavigation} from '@react-navigation/native';
import {shareSafetyInfo} from '@/utils/shareSafety';

interface BlogItemProps {
  onShare: (title: string, description: IBlogData['description']) => void;
  onReadMore: () => void;
  data: IBlogData;
}

const BlogItem = ({onReadMore, onShare, data}: BlogItemProps) => {
  return (
    <View className="border border-white">
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

export default function Blog() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Header />

      <ScrollView>
        <View className="m-4">
          <CustomText className="text-xl">Camping Canada Blog</CustomText>

          <View className="gap-3 mt-4">
            {blog.map(item => (
              <BlogItem
                key={item.id}
                onReadMore={() =>
                  navigation.navigate('BlogDetail', {blog: item})
                }
                data={item}
                onShare={shareSafetyInfo}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
