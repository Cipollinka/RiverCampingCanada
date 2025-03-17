import {View, TouchableOpacity, Text} from 'react-native';
import React, {useMemo, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE, Region} from 'react-native-maps';
import ScreenWrapper from '@/components/ScreenWrapper';
import {ILocationDetail} from '@/navigation/types';
import {LOCATIONS} from '@/utils/locations';
import LocationCard from '@/components/LocationCard';
import Header from '@/components/Header';

const INITIAL_REGION = {
  latitude: 49.25,
  longitude: -124.8,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

const ZoomControls: React.FC<ZoomControlsProps> = ({onZoomIn, onZoomOut}) => (
  <View className="absolute right-4 top-20 bg-gray-800/80 rounded-lg p-2 shadow-lg">
    <TouchableOpacity
      onPress={onZoomIn}
      className="p-3 border-b border-gray-600">
      <Text className="text-white text-xl font-bold">+</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={onZoomOut} className="p-3">
      <Text className="text-white text-xl font-bold">-</Text>
    </TouchableOpacity>
  </View>
);

export default function Map() {
  const [selectedLocation, setSelectedLocation] =
    useState<ILocationDetail | null>(null);
  const [mapRegion, setMapRegion] = useState<Region>(INITIAL_REGION);

  const locationDetails = useMemo(
    () =>
      Object.values(LOCATIONS)
        .map(item => item.items)
        .flat(),
    [],
  );

  const handleZoom = (zoomIn: boolean) => {
    const ZOOM_FACTOR = 2;
    setMapRegion(prevRegion => ({
      ...prevRegion,
      latitudeDelta: zoomIn
        ? prevRegion.latitudeDelta / ZOOM_FACTOR
        : prevRegion.latitudeDelta * ZOOM_FACTOR,
      longitudeDelta: zoomIn
        ? prevRegion.longitudeDelta / ZOOM_FACTOR
        : prevRegion.longitudeDelta * ZOOM_FACTOR,
    }));
  };

  const handleMarkerPress = (location: ILocationDetail) => {
    setSelectedLocation(location.id === selectedLocation?.id ? null : location);
  };

  return (
    <ScreenWrapper>
      <Header />
      <View className="flex-1 relative">
        <MapView
          style={{flex: 1, backgroundColor: '#fff'}}
          provider={PROVIDER_GOOGLE}
          initialRegion={mapRegion}
          region={mapRegion}
          onRegionChangeComplete={setMapRegion}>
          {locationDetails.map(location => (
            <Marker
              key={location.id}
              coordinate={location.coordinates}
              onPress={() => handleMarkerPress(location)}
            />
          ))}
        </MapView>

        <ZoomControls
          onZoomIn={() => handleZoom(true)}
          onZoomOut={() => handleZoom(false)}
        />

        {selectedLocation && (
          <View className="p-4 absolute bottom-[60px] left-0 right-0">
            <LocationCard
              location={selectedLocation}
              onClose={() => setSelectedLocation(null)}
            />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
}
