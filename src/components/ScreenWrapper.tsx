import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ScreenWrapper({children}: Props) {
  return (
    <View style={{flex: 1}}>
      <Image
        style={{flex: 1, width: '100%', height: '100%', position: 'absolute'}}
        source={require('../assets/images/bg.png')}
      />
      <SafeAreaView className="flex-1 relative">{children}</SafeAreaView>
    </View>
  );
}
