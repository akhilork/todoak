import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CarouselIndicatorProps} from '@app/types';
import {Colors} from '@app/styles';

const CarouselIndicator = ({
  indicatorCount,
  selectedIndicator,
}: CarouselIndicatorProps) => {
  const getIndicatorCount = () => {
    return indicatorCount > 3 ? 3 : indicatorCount;
  };

  const getSelectedIndicator = () => {
    if (indicatorCount > 3 && selectedIndicator > 0) {
      return selectedIndicator < indicatorCount - 1 ? 1 : 2;
    }
    return selectedIndicator;
  };

  return (
    <View style={styles.carouselIndicatorContainer}>
      {[...new Array(getIndicatorCount()).keys()].map(index => (
        <View
          key={index}
          style={[
            styles.carouselIndicator,
            getSelectedIndicator() === index &&
              styles.carouselIndicatorSelected,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  carouselIndicator: {
    backgroundColor: Colors.grayVariant[300],
    width: 15,
    height: 5,
    borderRadius: 50,
  },
  carouselIndicatorSelected: {
    backgroundColor: Colors.white,
    width: 40,
  },
});

export default CarouselIndicator;
