import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/styles';

const NavigationIcon = ({route, isFocused}): JSX.Element => {
  const iconNames: any = {
    Home: 'home',
    Calendar: 'calendar',
    Report: 'barschart',
    Profile: 'user',
  };

  return (
    <Icon
      name={iconNames[route]}
      size={25}
      color={isFocused ? Colors.primary : Colors.gray}
    />
  );
};

export default NavigationIcon;
