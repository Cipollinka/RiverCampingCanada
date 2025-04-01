import {View, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import CustomText from '@/components/CustomText';
import CustomButton from '@/components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import StepCounter from '@/components/StepCounter';
import {appAtom} from '@/store/atoms';
import {useAtom} from 'jotai';

export default function Welcome1() {
  const [is] = useAtom(appAtom);
  const navigation = useNavigation();
  console.log('is', is);

  useLayoutEffect(() => {
    if (is?.isWelcomeCompleted) {
      navigation.navigate('Home');
    }
  }, [is, navigation]);

  return (
    <ScreenWrapper>
      <Image
        source={require('@/assets/images/welcome/1.png')}
        className="w-full h-1/2"
      />
      <Image
        source={require('@/assets/images/logo.png')}
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[172px]"
      />

      <View className=" border-t border-t-white w-full p-6 flex-1">
        <CustomText className="text-xl">
          Welcome to River Camping - Canada
        </CustomText>
        <CustomText className="mt-4 mb-8 text-[#C5C5C5]" ff="M">
          Discover the best river camping spots in Canada's stunning regions.
          Let’s get started!
        </CustomText>

        <View className="mt-auto mb-4">
          <CustomButton
            title="Start"
            onPress={() => navigation.navigate('Welcome2')}
          />
          <View className="mx-auto mt-8">
            <StepCounter step={1} total={5} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
