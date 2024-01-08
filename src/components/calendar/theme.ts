import {Colors} from '@app/styles';

export const themeColor = Colors.primary;

export function getTheme() {
  const disabledColor = Colors.gray;

  return {
    calendarBackground: Colors.primaryVariant[500],
    // arrows
    arrowColor: Colors.white,
    // knob
    expandableKnobColor: Colors.white,
    // month
    monthTextColor: Colors.white,
    textMonthFontSize: 16,
    textMonthFontFamily: 'HelveticaNeue',
    textMonthFontWeight: 'bold' as const,
    // day names
    textSectionTitleColor: Colors.white,
    textDayHeaderFontSize: 12,
    textDayHeaderFontFamily: 'HelveticaNeue',
    textDayHeaderFontWeight: 'normal' as const,
    // dates
    dayTextColor: Colors.white,
    todayTextColor: Colors.danger,
    textDayFontSize: 14,
    textDayFontFamily: 'HelveticaNeue',
    textDayFontWeight: 'bold' as const,
    textDayStyle: {marginTop: 6},
    // selected date
    selectedDayBackgroundColor: themeColor,
    selectedDayTextColor: Colors.white,
    // disabled date
    textDisabledColor: disabledColor,
    // dot (marked date)
    dotColor: themeColor,
    selectedDotColor: Colors.white,
    disabledDotColor: disabledColor,
    dotStyle: {marginTop: -2},
  };
}
