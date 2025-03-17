import {ScrollView, View} from 'react-native';
import React, {useMemo} from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import Header from '@/components/Header';
import {favoritesAtom} from '@/store/atoms';
import {useAtom} from 'jotai';
import CustomText from '@/components/CustomText';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '@/components/CustomButton';
import LocationCard from '@/components/LocationCard';
import {LOCATIONS} from '@/utils/locations';

export default function Bookmarks() {
  const navigation = useNavigation();
  const [favorites] = useAtom(favoritesAtom);

  const favoriteEntities = useMemo(
    () =>
      Object.values(LOCATIONS)
        .map(item => item.items)
        .flat()
        .filter(item => favorites?.includes?.(item.id)),
    [favorites],
  );

  const isEmpty = favorites?.length === 0;

  return (
    <ScreenWrapper>
      <Header />

      {isEmpty && (
        <View className="my-auto mx-auto gap-4">
          <CustomText className="text-lg">
            There are no saved locations yet.
          </CustomText>
          <CustomButton
            variant="secondary"
            title="Go to Locations Finder"
            onPress={() => navigation.navigate('LocationFinder')}
          />
        </View>
      )}

      {!isEmpty && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="m-4">
            <CustomText className="text-xl">Saved:</CustomText>

            <View className="gap-3 my-4">
              {favoriteEntities.map(item => (
                <LocationCard location={item} key={item.id} />
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </ScreenWrapper>
  );
}
