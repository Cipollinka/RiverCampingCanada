import {atomWithStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a custom storage using AsyncStorage
const asyncStorage = {
  getItem: async (key: string) => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (key: string, value: unknown) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};

// Persistent atom for storing favorite location IDs
export const favoritesAtom = atomWithStorage<number[]>(
  'favorites',
  [],
  asyncStorage,
);

// Persistent atom for storing app state
export const appAtom = atomWithStorage(
  'appState',
  {isWelcomeCompleted: false},
  asyncStorage,
);
