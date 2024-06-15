import React from 'react';
import {Home, Calendar, CreateOrEditTask} from '@app/screens';
import {BottomSheet, TabBar} from '@app/components';
import {Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import AddIcon from '@app/assets/svg/add.svg';
import {AppScreen} from '@app/types';
import {Colors} from '@app/styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@app/store';
import {setOpenTaskModel} from '@app/store/task';

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
  const openTaskModel = useSelector(
    (state: RootState) => state.task.openTaskModel,
  );
  const dispatch = useDispatch();

  return (
    <>
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
              onPress={() => dispatch(setOpenTaskModel(true))}>
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
      <BottomSheet
        visible={openTaskModel}
        snapPointValues={['90%', '90%']}
        sheetModalBackground={Colors.white}
        onDismiss={() => dispatch(setOpenTaskModel(false))}>
        <CreateOrEditTask />
      </BottomSheet>
    </>
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
