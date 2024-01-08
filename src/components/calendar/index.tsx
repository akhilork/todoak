import React, {useRef, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {ExpandableCalendar, CalendarProvider} from 'react-native-calendars';
import {getTheme} from './theme';

const ExpandableCalendarScreen = () => {
  const theme = useRef(getTheme());
  const today = new Date().toISOString().split('T')[0];

  const onDateChanged = useCallback((date: string, updateSource: string) => {
    // TODO
    console.log('On date change: ', date, updateSource);
  }, []);

  return (
    <View style={styles.calendarContainer}>
      <CalendarProvider date={today} onDateChanged={onDateChanged}>
        <ExpandableCalendar theme={theme.current} />
      </CalendarProvider>
    </View>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendarContainer: {
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    overflow: 'hidden',
  },
});
