import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app-navigator';
import {navigationRef} from './navigation-service';

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
