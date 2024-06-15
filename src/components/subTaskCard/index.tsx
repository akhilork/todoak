import React, {useState} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import {Colors, GlobalStyles} from '@app/styles';
import {SubTaskCardProps} from '@app/types';

const SubTaskCard = ({
  title,
  description,
  isCompleted,
}: SubTaskCardProps): JSX.Element => {
  const [isTaskCompleted, setIsTaskCompleted] = useState(isCompleted);

  return (
    <TouchableOpacity
      style={styles.subTaskCardConatiner}
      onPress={() => setIsTaskCompleted(prev => !prev)}>
      <View style={styles.taskItemContainer}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={isTaskCompleted}
            onValueChange={newValue => setIsTaskCompleted(newValue)}
            tintColors={{true: Colors.primary}}
            boxType="square"
            tintColor={Colors.primary}
            onCheckColor={Colors.primary}
            onTintColor={Colors.primary}
            style={{
              transform: [
                {scaleX: Platform.OS === 'ios' ? 0.7 : 1},
                {scaleY: Platform.OS === 'ios' ? 0.7 : 1},
              ],
            }}
          />
        </View>
        <View style={GlobalStyles.flex1}>
          <Text
            style={[
              styles.taskTitle,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                textDecorationLine: isTaskCompleted ? 'line-through' : 'none',
              },
            ]}>
            {title}
          </Text>
          <Text>{description}</Text>
        </View>
      </View>
      <Icon name={'chevron-right'} size={32} color={Colors.black} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subTaskCardConatiner: {
    backgroundColor: Colors.grayVariant[100],
    borderRadius: 10,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: Platform.OS === 'ios' ? 2 : 6,
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: '500',
    marginBottom: 5,
  },
  checkboxContainer: {
    top: -3,
  },
});

export default SubTaskCard;
