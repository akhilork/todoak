import React from 'react';
import {StyleSheet, ScrollView, View, Text, Platform} from 'react-native';
import {Calendar as CustomCalendar, CalendarTaskCard} from '@app/components';
import {Colors, GlobalStyles} from '@app/styles';
import {TasksList} from '@app/utils';

const Calendar = (): JSX.Element => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.calendarOuterContainer}>
      <CustomCalendar />
      <View style={styles.calendarTaskItemOuterContainer}>
        {TasksList.map((task, index) => (
          <View key={index} style={styles.calendarTaskItem}>
            <View style={styles.calendarTimeContainer}>
              <Text style={styles.calendarTime}>{task.startTime}</Text>
              <View style={styles.calendarTimeDivider} />
              <Text style={styles.calendarTime}>{task.endTime}</Text>
            </View>
            <View style={GlobalStyles.flex1}>
              <CalendarTaskCard
                name={task.name}
                description={task.description}
                date={task.date}
                users={task.users}
                status={task.status}
                percentage={task.percentage}
              />
              <View
                style={[styles.calendarTimeDivider, styles.horizontalDivider]}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendarOuterContainer: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  calendarTaskItemOuterContainer: {
    paddingTop: 10,
    paddingBottom: 70,
  },
  calendarTaskItem: {
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  calendarTimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
  },
  calendarTime: {
    color: Colors.white,
    fontSize: 14,
  },
  calendarTimeDivider: {
    flex: 1,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRightWidth: Platform.OS === 'ios' ? 1 : 0,
    borderTopWidth: Platform.OS === 'ios' ? 1 : 0,
    borderColor: Colors.gray,
  },
  horizontalDivider: {
    marginLeft: 15,
    marginTop: 20,
  },
});

export default Calendar;
