import {Text, TextProps} from 'react-native';
import React from 'react';
import clsx from 'clsx';

type FW_T = typeof FW;

type AllInnerKeys = {
  [K in keyof FW_T]: keyof FW_T[K];
}[keyof FW_T];

interface Props extends TextProps {
  children: React.ReactNode;
  ff?: keyof FW_T;
  fw?: AllInnerKeys;
}

const FW = {
  In: {
    regular: 'InknutAntiqua-Regular',
    bold: 'InknutAntiqua-Bold',
    extrabold: 'InknutAntiqua-ExtraBold',
    black: 'InknutAntiqua-Black',
    semibold: 'InknutAntiqua-SemiBold',
    medium: 'InknutAntiqua-Medium',
    light: 'InknutAntiqua-Light',
  },
  M: {
    regular: 'Montserrat-Regular',
    bold: 'Montserrat-Bold',
    extrabold: 'Montserrat-ExtraBold',
    black: 'Montserrat-Black',
    semibold: 'Montserrat-SemiBold',
    medium: 'Montserrat-Medium',
    light: 'Montserrat-Light',
  },
};

const excludeColors = ['subText', 'black', 'accent'];

export default function CustomText({
  children,
  ff = 'In',
  fw = 'regular',
  className,
  ...rest
}: Props) {
  return (
    <Text
      style={{fontFamily: FW[ff][fw]}}
      className={clsx('', className, {
        'text-white pt-2': !excludeColors.some(color =>
          className?.includes(`text-${color}`),
        ),
      })}
      {...rest}>
      {children}
    </Text>
  );
}
