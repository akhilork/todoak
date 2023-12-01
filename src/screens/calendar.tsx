import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Calendar as CustomCalendar} from '@app/components';
import {Colors} from '@app/styles';

const Calendar = (): JSX.Element => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.calendarOuterContainer}>
      <CustomCalendar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendarOuterContainer: {
    backgroundColor: Colors.black,
    flex: 1,
  },
});

export default Calendar;
