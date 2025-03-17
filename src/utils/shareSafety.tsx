import {ISafetyData} from '@/navigation/types';
import {Share} from 'react-native';

export const shareSafetyInfo = (
  title: string,
  description: ISafetyData['description'],
) => {
  Share.share({
    message: `${title}\n\n${description
      .map(item => `${item.subTitle}: ${item.text}`)
      .join('\n\n')}`,
  });
};
