import React from 'react';
import {Colors} from '@app/styles';
import {TabBarProps} from '@app/types';
import CalendarIcon from '@app/assets/svg/calendar.svg';
import HomeIcon from '@app/assets/svg/home.svg';

const NavigationIcon = ({routeName, selectedTab}: TabBarProps): JSX.Element => {
  const color = routeName === selectedTab ? Colors.white : 'transparent';
  const props = {width: 30, height: 30, color: color};
  const iconNames: any = {
    Home: <HomeIcon {...props} />,
    Calendar: <CalendarIcon {...props} />,
  };

  return iconNames[routeName];
};

export default NavigationIcon;
