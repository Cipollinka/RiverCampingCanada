import {SafeAreaView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: React.ReactNode;
}

export default function ScreenWrapper({children}: Props) {
  return (
    <LinearGradient style={{flex: 1}} colors={['#232333', '#06060E']}>
      <SafeAreaView className="flex-1 relative">{children}</SafeAreaView>
    </LinearGradient>
  );
}
