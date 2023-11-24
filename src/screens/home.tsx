import React, {FC} from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {TaskCard} from '@app/components';
import {TasksList} from '@app/utils';
import {Colors, GlobalStyles} from '@app/styles';

const Home: FC = () => {
  return (
    <ScrollView
      style={styles.homeOuterContainer}
      contentInsetAdjustmentBehavior="automatic">
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
    backgroundColor: Colors.primaryDark,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
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
});

export default Home;
