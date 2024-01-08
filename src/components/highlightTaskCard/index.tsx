import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, GlobalStyles} from '@app/styles';
import {Task} from '@app/types';
import {AvatarGroup, ProgressBar} from '@app/components';
import CalendarIcon from '@app/assets/svg/calendar.svg';
import CardRoundCurve from '@app/assets/svg/card-round-curve.svg';
import CardBottomCurve from '@app/assets/svg/card-bottom-curve.svg';

const HighlightTaskCard = ({
  name,
  description,
  date,
  users,
  percentage = 0,
}: Task): JSX.Element => {
  return (
    <View style={styles.taskCardContainer}>
      <CardRoundCurve style={styles.cardRoundCurve} />
      <View style={styles.cardBottomCurve}>
        <CardBottomCurve width={150} height={15} />
      </View>
      <View style={styles.menuIcon}>
        <Ionicons name="ellipsis-horizontal" size={20} color={Colors.white} />
      </View>
      <View
        style={[GlobalStyles.row, GlobalStyles.justifySpacebetweenAlignCenter]}>
        <Text style={styles.taskCardName} numberOfLines={1}>
          {name}
        </Text>
      </View>
      <Text style={styles.taskCardDescription} numberOfLines={2}>
        {description}
      </Text>
      <ProgressBar
        percentage={percentage}
        borderWidth={0}
        unfilledColor={Colors.grayvariant[200]}
        color={Colors.white}
        height={5}
      />
      <View style={styles.divider} />
      <View style={styles.taskCardFooter}>
        <View style={styles.dateContainer}>
          <CalendarIcon width={20} height={20} color={Colors.transparent} />
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <View>
          <AvatarGroup users={users} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCardContainer: {
    backgroundColor: Colors.grayvariant[300],
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 18,
    height: 160,
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
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: Colors.gray,
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
  menuIcon: {
    backgroundColor: Colors.primaryVariant[400],
    borderRadius: 50,
    padding: 7,
    zIndex: 3,
    position: 'absolute',
    right: 0,
  },
  cardRoundCurve: {
    position: 'absolute',
    zIndex: 2,
    right: 0,
  },
  cardBottomCurve: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HighlightTaskCard;
