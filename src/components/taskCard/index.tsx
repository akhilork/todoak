import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, GlobalStyles} from '@app/styles';
import {Task} from '@app/types';
import {AvatarGroup} from '@app/components';
import CalendarIcon from '@app/assets/svg/calendar.svg';

const TaskCard = ({name, description, date, users}: Task): JSX.Element => {
  return (
    <View style={styles.taskCardContainer}>
      <View
        style={[GlobalStyles.row, GlobalStyles.justifySpacebetweenAlignCenter]}>
        <Text style={styles.taskCardName} numberOfLines={1}>
          {name}
        </Text>
        <Ionicons name="ellipsis-vertical" size={20} color={Colors.white} />
      </View>
      <Text style={styles.taskCardDescription} numberOfLines={2}>
        {description}
      </Text>
      <View style={styles.divider} />
      <View style={styles.taskCardFooter}>
        <View>
          <AvatarGroup users={users} />
        </View>
        <View style={styles.dateContainer}>
          <CalendarIcon width={20} height={20} color={Colors.transparent} />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  taskCardName: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskCardDescription: {
    color: Colors.white,
    fontSize: 14,
  },
  divider: {
    borderWidth: 1,
    borderColor: Colors.divider,
    marginVertical: 10,
  },
  taskCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: Colors.white,
    marginLeft: 5,
    fontWeight: '500',
  },
});

export default TaskCard;
