import React, {useState} from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  TaskCard,
  HighlightTaskCard,
  CarouselIndicator,
  GroupButton,
  BottomSheet,
  MenuItem,
} from '@app/components';
import {TasksList, TaskPriorityList, TaskMenuItem} from '@app/utils';
import {Colors, GlobalStyles} from '@app/styles';
import BellIcon from '@app/assets/svg/bell.svg';
import {useDispatch} from 'react-redux';
import {setOpenTaskModel} from '@app/store/task';
import {navigate} from '@app/navigation/navigation-service';

const Home = (): JSX.Element => {
  const carouselWidth = Dimensions.get('window').width - 40; // 40 is padding given on highlightTaskCardContainer
  const [selectedCarouselIndex, setSelectedCarouselIndex] = useState<number>(0);
  const [selectedPriority, setSelectedPriority] = useState<string>('High');
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onMenuItemPress = (item: string) => {
    console.log('item', item);
    if (item === 'edit') {
      dispatch(setOpenTaskModel(true));
    }
    setOpenMenu(false);
  };

  return (
    <View style={styles.homeOuterContainer}>
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
                openMenu={() => setOpenMenu(true)}
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
      <View style={[styles.todaysTaskContainer, GlobalStyles.flex1]}>
        <View
          style={[
            GlobalStyles.row,
            GlobalStyles.justifySpacebetweenAlignCenter,
            styles.todaysTaskHeadingContainer,
          ]}>
          <Text style={styles.todaysTaskHeading}>Today's Task</Text>
          <TouchableOpacity onPress={() => navigate('Calendar')}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={GlobalStyles.flex1}
          contentContainerStyle={styles.tasksListContainer}
          data={TasksList}
          renderItem={({item}) => (
            <TaskCard
              name={item.name}
              description={item.description}
              date={item.date}
              users={item.users}
              openMenu={() => setOpenMenu(true)}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      {/* Menu */}
      <BottomSheet
        visible={openMenu}
        snapPointValues={['30%', '30%']}
        onDismiss={() => setOpenMenu(false)}>
        <View style={styles.menuItemOuterContainer}>
          {TaskMenuItem.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onMenuItemPress(item.value)}>
              <MenuItem label={item.label} icon={item.icon} />
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  homeOuterContainer: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  todaysTaskContainer: {
    gap: 10,
    backgroundColor: Colors.primaryVariant[400],
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
  },
  todaysTaskHeadingContainer: {
    marginBottom: 10,
    padding: 20,
    paddingBottom: 0,
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
  menuItemOuterContainer: {
    padding: 10,
    gap: 10,
  },
  tasksListContainer: {
    gap: 12,
    paddingBottom: 65,
    paddingHorizontal: 20,
  },
});

export default Home;
