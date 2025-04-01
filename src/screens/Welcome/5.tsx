import {View, Image} from 'react-native';
import React, {useActionState} from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import StepCounter from '@/components/StepCounter';
import {appAtom} from '@/store/atoms';
import {useAtom} from 'jotai';

export default function Welcome5() {
  const [_, set] = useAtom(appAtom);
  const navigation = useNavigation();

  const handleSave = () => {
    set(prev => ({...prev, isWelcomeCompleted: true}));
    navigation.navigate('Home');
  };

  return (
    <ScreenWrapper>
      <Image
        source={require('@/assets/images/welcome/5.png')}
        className="w-full h-1/2"
      />
      <Image
        source={require('@/assets/images/logo.png')}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[172px]"
      />

      <View className=" border-t border-t-white w-full p-6 flex-1">
        <CustomText className="text-xl">Save Your Favorite Spots</CustomText>
        <CustomText className="mt-4 mb-8 text-[#C5C5C5]" ff="M">
          Save your favorite locations to revisit later and keep your camping
          adventures organized.
        </CustomText>

        <View className="mt-auto mb-4">
          <CustomButton title="Get Started" onPress={handleSave} />
          <View className="mx-auto mt-8">
            <StepCounter step={5} total={5} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
