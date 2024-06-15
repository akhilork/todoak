import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, GlobalStyles} from '@app/styles';
import {Task} from '@app/types';
import {AvatarGroup, ProgressBar} from '@app/components';
import LinearGradient from 'react-native-linear-gradient';
import CalendarCardCurve from '@app/assets/svg/calendar-card-curve.svg';

const CalendarTaskCard = ({
  name,
  status,
  users,
  percentage = 0,
  openMenu,
}: Task): JSX.Element => {
  return (
    <LinearGradient
      colors={[Colors.primaryVariant[100], Colors.primaryVariant[50]]}
      locations={[0.2, 1]}
      style={styles.taskCardContainer}>
      <View style={styles.calendarCardCurveContainer}>
        <CalendarCardCurve />
      </View>
      <View style={styles.statusProgressBarConatiner}>
        <ProgressBar
          percentage={percentage}
          borderWidth={0}
          unfilledColor={Colors.grayVariant[200]}
          color={Colors.primaryVariant[300]}
          height={7}
        />
      </View>
      <Text style={styles.taskStatus} numberOfLines={1}>
        {status}
      </Text>
      <View
        style={[GlobalStyles.row, GlobalStyles.justifySpacebetweenAlignCenter]}>
        <View>
          <Text style={styles.taskCardName} numberOfLines={1}>
            {name}
          </Text>
          <AvatarGroup users={users} />
        </View>
        <TouchableOpacity onPress={openMenu}>
          <Ionicons name="ellipsis-vertical" size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: Colors.primaryVariant[100],
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    position: 'relative',
  },
  taskStatus: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  taskCardName: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  calendarCardCurveContainer: {
    position: 'absolute',
    top: 0,
    right: -5,
  },
  statusProgressBarConatiner: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
    width: 180,
    height: 30,
    justifyContent: 'center',
  },
});

export default CalendarTaskCard;
