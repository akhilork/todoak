import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '@app/styles';
import {MenuItemProps} from '@app/types';

const MenuItem = ({label, icon}: MenuItemProps): JSX.Element => {
  return (
    <View style={styles.menuItemContainer}>
      <AntDesign name={icon} size={25} color={Colors.white} />
      <Text style={styles.menuItemLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 10,
  },
  menuItemLabel: {
    color: Colors.white,
    fontSize: 18,
  },
});

export default MenuItem;
