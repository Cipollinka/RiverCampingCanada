import {View, Image, TouchableOpacity, Share, Linking} from 'react-native';
import React from 'react';
import {ILocationDetail} from '@/navigation/types';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import {useAtom} from 'jotai';
import {favoritesAtom} from '@/store/atoms';

import BookmarkIcon from '@/assets/icons/bookmark.svg';
import ShareIcon from '@/assets/icons/share.svg';
import CloseIcon from '@/assets/icons/close.svg';
import clsx from 'clsx';

interface IProps {
  location: ILocationDetail;
  onClose?: () => void;
}

export default function LocationCard({location, onClose}: IProps) {
  const [favorites, setFavorites] = useAtom(favoritesAtom);
  const isFavorite = favorites?.includes?.(location.id);

  const handleSave = () => {
    if (isFavorite) {
      setFavorites(favorites?.filter(id => id !== location.id));
    } else {
      setFavorites(
        favorites?.length ? [...favorites, location.id] : [location.id],
      );
    }
  };

  const onSetRoute = () => {
    const {latitude, longitude} = location.coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };

  const handleShare = () => {
    Share.share({
      message: `Check out this place: ${location.title}`,
    });
  };

  return (
    <View className="border border-white relative">
      {onClose && (
        <TouchableOpacity
          onPress={onClose}
          className="absolute top-4 right-4 z-10 bg-white w-[25px] h-[25px] items-center justify-center">
          <CloseIcon />
        </TouchableOpacity>
      )}
      <View className="h-[178px]">
        <Image
          source={location?.image}
          className="w-full h-[178px]"
          resizeMode="cover"
        />
      </View>

      <View className="p-4 bg-primary">
        <CustomText ff="M" fw="bold" className="text-lg">
          {location.title}
        </CustomText>
        <CustomText ff="M" className="text-subText mt-2">
          {location.description}
        </CustomText>

        <View className="flex-row justify-between gap-2 mt-4">
          <CustomButton
            className="flex-1"
            title="Set Route"
            variant="secondary"
            onPress={onSetRoute}
          />

          <View className="flex-row gap-2">
            <TouchableOpacity
              className={clsx('w-[50px] h-[50px] items-center justify-center', {
                'bg-action': isFavorite,
                'bg-white': !isFavorite,
              })}
              onPress={handleSave}>
              <BookmarkIcon />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-white w-[50px] h-[50px] items-center justify-center"
              onPress={handleShare}>
              <ShareIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
