import React, {FC, useState} from 'react';
import {Dimensions, ScrollView, Text, View, StyleSheet} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {TaskCard, HighlightTaskCard, CarouselIndicator} from '@app/components';
import {TasksList} from '@app/utils';
import {Colors, GlobalStyles} from '@app/styles';

const Home: FC = () => {
  const carouselWidth = Dimensions.get('window').width - 40; // 40 is padding given on highlightTaskCardContainer
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState<number>(0);

  return (
    <ScrollView
      style={styles.homeOuterContainer}
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.highlightTaskCardContainer}>
        <View>
          <Carousel
            loop
            width={carouselWidth}
            height={160}
            data={TasksList.slice(0, 3)}
            onSnapToItem={index => setSelectedCarouselIndex(index)}
            renderItem={({item, index}) => (
              <HighlightTaskCard
                key={index}
                name={item.name}
                description={item.description}
                date={item.date}
                users={item.users}
                percentage={item.percentage}
              />
            )}
          />
          <View style={styles.carouselIndicator}>
            <CarouselIndicator
              indicatorCount={TasksList.slice(0, 3).length}
              selectedIndicator={selectedCarouselIndex}
            />
          </View>
        </View>
      </View>
      <View style={styles.todaysTaskContainer}>
        <View
          style={[
            GlobalStyles.row,
            GlobalStyles.justifySpacebetweenAlignCenter,
            styles.todaysTaskHeadingContainer,
          ]}>
          <Text style={styles.todaysTaskHeading}>Today's Task</Text>
          <Text style={styles.seeAllText}>See All</Text>
        </View>
        {TasksList.map((task, index) => (
          <TaskCard
            key={index}
            name={task.name}
            description={task.description}
            date={task.date}
            users={task.users}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeOuterContainer: {
    backgroundColor: Colors.black,
  },
  todaysTaskContainer: {
    padding: 20,
    gap: 10,
    backgroundColor: Colors.primaryVariant[300],
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    paddingBottom: 70,
  },
  todaysTaskHeadingContainer: {
    marginBottom: 10,
  },
  todaysTaskHeading: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: Colors.white,
    fontSize: 14,
  },
  highlightTaskCardContainer: {
    padding: 20,
  },
  carouselIndicator: {
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 5,
  },
});

export default Home;
