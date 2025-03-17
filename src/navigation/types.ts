import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Welcome1: undefined;
  Welcome2: undefined;
  Welcome3: undefined;
  Welcome4: undefined;
  Welcome5: undefined;

  LocationFinder: undefined;
  LocationDetail: {
    location: ILocation;
  };
  Bookmarks: undefined;
  Safety: undefined;
  SafetyDetail: {
    safety: ISafetyData;
  };

  Map: undefined;
  Blog: undefined;
  BlogDetail: {
    blog: IBlogData;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface ILocation {
  id: number;
  image: ImageSourcePropType;
  title: string;
  items: ILocationDetail[];
}

export interface ILocationDetail {
  id: number;
  title: string;
  image: ImageSourcePropType;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface ISafetyData {
  id: number;
  title: string;
  description: {subTitle: string; text: string}[];
  image: number;
}

export interface IBlogData {
  id: number;
  title: string;
  description: string;
  content: {subTitle: string; text: string}[];
}
