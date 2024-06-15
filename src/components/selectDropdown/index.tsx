import {Colors} from '@app/styles';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SelectDropdownProps} from '@app/types';

const CustomSelectDropdown = ({
  data,
  placeholder,
  defaultValue,
}: SelectDropdownProps): JSX.Element => {
  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultValue={defaultValue}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View
            style={[
              styles.dropdownButtonStyle,
              {
                backgroundColor: selectedItem?.color || Colors.grayVariant[100],
              },
            ]}>
            {selectedItem && (
              <Icon
                name={selectedItem.icon}
                style={styles.dropdownButtonIconStyle}
              />
            )}
            <Text
              style={[
                styles.dropdownButtonTxtStyle,
                {color: selectedItem?.textColor || Colors.black},
              ]}>
              {(selectedItem && selectedItem.title) || placeholder}
            </Text>
            <Icon
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              style={[
                styles.dropdownButtonArrowStyle,
                {color: selectedItem?.textColor || Colors.black},
              ]}
            />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && {backgroundColor: Colors.grayVariant[100]}),
            }}>
            <Icon name={item.icon} style={styles.dropdownItemIconStyle} />
            <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 100,
    height: 30,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownButtonArrowStyle: {
    fontSize: 14,
  },
  dropdownButtonIconStyle: {
    fontSize: 14,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  dropdownItemIconStyle: {
    fontSize: 14,
    marginRight: 8,
  },
});

export default CustomSelectDropdown;
