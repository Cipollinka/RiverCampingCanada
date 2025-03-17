import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import clsx from 'clsx';
import HomeIcon from '@/assets/icons/home.svg';
import BookmarkIcon from '@/assets/icons/bookmark.svg';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  const isSelectedHome = route.name === 'Home';
  const isSelectedFavorite = route.name === 'Bookmarks';

  return (
    <View className="flex-row justify-between gap-2 items-center bg-primary px-6 py-4 border-b border-b-white mt-4">
      <TouchableOpacity
        className={clsx('w-[44px] h-[44px] justify-center items-center', {
          'bg-white': isSelectedFavorite,
          'bg-tertiary border border-white': !isSelectedFavorite,
        })}
        onPress={() => !isSelectedFavorite && navigation.navigate('Bookmarks')}>
        <BookmarkIcon color={!isSelectedFavorite ? '#fff' : '#181825'} />
      </TouchableOpacity>
      <Image
        source={require('@/assets/images/logo_small.png')}
        className="w-[196px] h-[70px]"
      />

      <TouchableOpacity
        className={clsx('w-[44px] h-[44px] justify-center items-center', {
          'bg-white': isSelectedHome,
          'bg-tertiary border border-white': !isSelectedHome,
        })}
        onPress={() => !isSelectedHome && navigation.navigate('Home')}>
        <HomeIcon color={!isSelectedHome ? '#fff' : '#181825'} />
      </TouchableOpacity>
    </View>
  );
}
