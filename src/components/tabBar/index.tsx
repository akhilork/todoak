import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import NavigationIcon from './navigationIcon';
import {TabBarProps} from '@app/types';

const TabBar = ({routeName, selectedTab, navigate}: TabBarProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabBarButton}>
      {NavigationIcon({routeName, selectedTab})}
      <Text
        style={[
          styles.tabBarLabel,
          // eslint-disable-next-line react-native/no-inline-styles
          {fontWeight: routeName === selectedTab ? 'bold' : 'normal'},
        ]}>
        {routeName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  tabBarLabel: {
    color: 'white',
    margin: 5,
  },
});

export default TabBar;
