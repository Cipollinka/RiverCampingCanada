import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {HomeScreen} from '@screens/Home';
import Welcome1 from '@/screens/Welcome/1';
import Welcome2 from '@/screens/Welcome/2';
import Welcome3 from '@/screens/Welcome/3';
import Welcome4 from '@/screens/Welcome/4';
import Welcome5 from '@/screens/Welcome/5';
import LocationsFinder from '@/screens/LocationsFinder';
import LocationDetail from '@/screens/LocationsFinder/LocationDetail';
import SafetyScreen from '@/screens/Safety';
import SafetyDetail from '@/screens/Safety/SafetyDetail';
import Blog from '@/screens/Blog';
import BlogDetail from '@/screens/Blog/BlogDetail';
import Bookmarks from '@/screens/Bookmarks';
import Map from '@/screens/Map';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome1"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Welcome1"
        options={{animation: 'fade'}}
        component={Welcome1}
      />
      <Stack.Screen
        name="Welcome2"
        options={{animation: 'fade'}}
        component={Welcome2}
      />
      <Stack.Screen
        name="Welcome3"
        options={{animation: 'fade'}}
        component={Welcome3}
      />
      <Stack.Screen
        name="Welcome4"
        options={{animation: 'fade'}}
        component={Welcome4}
      />
      <Stack.Screen
        name="Welcome5"
        options={{animation: 'fade'}}
        component={Welcome5}
      />

      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="LocationFinder" component={LocationsFinder} />
      <Stack.Screen name="LocationDetail" component={LocationDetail} />

      <Stack.Screen name="Safety" component={SafetyScreen} />
      <Stack.Screen name="SafetyDetail" component={SafetyDetail} />

      <Stack.Screen name="Blog" component={Blog} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />

      <Stack.Screen name="Bookmarks" component={Bookmarks} />

      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};
