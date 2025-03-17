import {TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import clsx from 'clsx';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  Icon?: React.ReactNode;
  className?: string;
}

export default function CustomButton({
  title,
  onPress,
  disabled,
  variant = 'primary',
  Icon,
  className,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={clsx(
        'py-4 justify-center items-center flex-row gap-2',
        className,
        {
          'bg-white': variant === 'primary',
          'bg-action': variant === 'secondary',
          'opacity-60': disabled,
        },
      )}>
      {Icon && Icon}
      <CustomText className="text-black" ff="M" fw="bold">
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}
