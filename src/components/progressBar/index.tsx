import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import {Colors} from '@app/styles';
import {ProgressBarProps} from '@app/types';

const ProgressBar = ({
  percentage,
  borderWidth = 0,
  unfilledColor,
  color,
  width = null,
  height,
}: ProgressBarProps) => {
  return (
    <View style={styles.progressBarContainer}>
      <Progress.Bar
        style={styles.progressBar}
        progress={percentage / 100}
        borderWidth={borderWidth}
        unfilledColor={unfilledColor}
        color={color}
        width={width}
        height={height}
      />
      <Text style={styles.progressPercentage}>{percentage}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  progressBar: {
    flex: 1,
  },
  progressPercentage: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default ProgressBar;
