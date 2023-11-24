import React from 'react';
import {Home, Calendar} from '@app/screens';
import {TabBar} from '@app/components';
import {Alert, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import AddIcon from '@app/assets/svg/add.svg';
import {AppScreen} from '@app/types';
import {Colors} from '@app/styles';

const appScreens: AppScreen[] = [
  {
    name: 'Home',
    position: 'LEFT',
    component: Home,
  },
  {
    name: 'Calendar',
    position: 'RIGHT',
    component: Calendar,
  },
];

const AppNavigator = (): JSX.Element => {
  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      height={55}
      circleWidth={50}
      bgColor={Colors.primary}
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={() => (
        <Animated.View style={styles.buttonCircleUp}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => Alert.alert('Click Action')}>
            <AddIcon color={Colors.white} width={30} height={30} />
          </TouchableOpacity>
        </Animated.View>
      )}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={TabBar}>
      {appScreens.map((screen, index) => (
        <CurvedBottomBar.Screen
          key={index}
          name={screen.name}
          position={screen.position}
          component={screen.component}
        />
      ))}
    </CurvedBottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    bottom: 30,
  },
});

export default AppNavigator;
