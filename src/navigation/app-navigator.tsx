import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Calendar, Report, Profile} from '../screens';

const Tab = createBottomTabNavigator();

const appScreens = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Calendar',
    component: Calendar,
  },
  {
    name: 'Report',
    component: Report,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

const AppNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator>
      {appScreens.map((screen, index) => (
        <Tab.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AppNavigator;
