import {View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';

interface Props {
  step: number;
  total: number;
}

export default function StepCounter({step, total}: Props) {
  return (
    <View className="border border-white w-[70px] h-[32px] items-center justify-center bg-secondary">
      <CustomText ff="M" fw="semibold">
        {step}/{total}
      </CustomText>
    </View>
  );
}
