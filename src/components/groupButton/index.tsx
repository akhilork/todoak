import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '@app/styles';
import {GroupButtonProps} from '@app/types';

const GroupButton = ({
  buttonList,
  selectedButton,
  updateSelectedButton,
}: GroupButtonProps): JSX.Element => {
  const showDivider = (button: string, index: number) => {
    const selectedIndex = buttonList.findIndex(item => selectedButton === item);
    return (
      selectedButton !== button &&
      index !== buttonList.length - 1 &&
      index !== selectedIndex - 1
    );
  };

  return (
    <View style={styles.groupButtonContainer}>
      {buttonList.map((item, index) => (
        <View key={index} style={styles.groupButtonOuterContainer}>
          <TouchableOpacity
            style={[
              styles.groupButton,
              selectedButton === item && {
                backgroundColor: Colors.primaryVariant[400],
              },
            ]}
            onPress={() => updateSelectedButton(item)}>
            <Text style={styles.groupButtonText}>{item}</Text>
          </TouchableOpacity>
          {showDivider(item, index) && (
            <View style={styles.groupButtonDivider} />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  groupButtonContainer: {
    backgroundColor: Colors.grayVariant[300],
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    display: 'flex',
  },
  groupButtonOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
  },
  groupButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  groupButtonDivider: {
    width: 2,
    height: 30,
    backgroundColor: Colors.white,
    borderRadius: 50,
  },
});

export default GroupButton;
