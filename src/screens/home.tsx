import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  TaskCard,
  HighlightTaskCard,
  CarouselIndicator,
  GroupButton,
} from '@app/components';
import {TasksList, TaskPriorityList} from '@app/utils';
import {Colors, GlobalStyles} from '@app/styles';
import BellIcon from '@app/assets/svg/bell.svg';

const Home = (): JSX.Element => {
  const carouselWidth = Dimensions.get('window').width - 40; // 40 is padding given on highlightTaskCardContainer
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState<number>(0);
  const [selectedPriority, setSelectedPriority] = useState<string>('High');

  return (
    <ScrollView
      style={styles.homeOuterContainer}
      contentInsetAdjustmentBehavior="automatic">
      {/* Header */}
      <View style={styles.homeHeaderContainer}>
        <View style={styles.profileInfoContainer}>
          <Image
            style={styles.profileImage}
            source={{
              uri: 'https://mui.com/static/images/avatar/2.jpg',
            }}
          />
          <View>
            <Text style={styles.profileName}>Akhil Kannan</Text>
            <Text style={styles.profileDesigination}>Product Manager</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <BellIcon color={Colors.white} width={20} height={20} />
        </TouchableOpacity>
      </View>
      {/* Group button */}
      <View style={styles.groupButtonContainer}>
        <GroupButton
          buttonList={TaskPriorityList}
          selectedButton={selectedPriority}
          updateSelectedButton={setSelectedPriority}
        />
      </View>
      {/* Highlight Task */}
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
      {/* Todays Task */}
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
    backgroundColor: Colors.primaryVariant[400],
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
  groupButtonContainer: {
    paddingHorizontal: 20,
  },
  homeHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  notificationButton: {
    backgroundColor: Colors.primaryVariant[400],
    borderRadius: 10,
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  profileName: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileDesigination: {
    color: Colors.white,
    fontSize: 12,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default Home;
