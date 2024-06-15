import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors, GlobalStyles} from '@app/styles';
import {
  Avatar,
  ProgressBar,
  SelectDropdown,
  SubTaskCard,
} from '@app/components';
import {
  DummyCreateTasksDetails,
  PriorityList,
  StatusList,
  UsersList,
} from '@app/utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {setOpenTaskModel} from '@app/store/task';

const CreateOrEditTask = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <View style={styles.createOrEditTaskContainer}>
      <View
        style={[GlobalStyles.row, GlobalStyles.justifySpacebetweenAlignCenter]}>
        <TouchableOpacity
          style={styles.actionIconContainer}
          onPress={() => dispatch(setOpenTaskModel(false))}>
          <Icon name={'close'} size={18} color={Colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionIconContainer}>
          <Icon name={'edit'} size={18} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.taskDetailsContainer}>
        <Text style={styles.taskName}>{DummyCreateTasksDetails.name}</Text>
        <View style={[GlobalStyles.row, styles.createdUserDetails]}>
          <Avatar height={25} width={25} url={UsersList[1].image} />
          <Text style={styles.createdUserInfo}>
            Created by {DummyCreateTasksDetails.user.name}{' '}
            {DummyCreateTasksDetails.date}
          </Text>
        </View>
        <View style={[GlobalStyles.row, styles.actionButtonContainer]}>
          <SelectDropdown
            data={PriorityList}
            placeholder="Priority"
            defaultValue={PriorityList[0]}
          />
          <SelectDropdown
            data={StatusList}
            placeholder="Status"
            defaultValue={StatusList[2]}
          />
        </View>
      </View>
      <ProgressBar
        percentage={DummyCreateTasksDetails.percentage}
        borderWidth={0}
        unfilledColor={Colors.primaryVariant[10]}
        color={Colors.primaryVariant[300]}
        height={7}
        progressPercentageColor={Colors.black}
      />
      <View>
        <Text style={styles.heading}>Description:</Text>
        <Text>{DummyCreateTasksDetails.description}</Text>
      </View>
      <View style={GlobalStyles.flex1}>
        <Text style={[styles.heading, styles.subTaskHeading]}>Sub Tasks</Text>
        <FlatList
          style={GlobalStyles.flex1}
          contentContainerStyle={styles.subTaskContainer}
          data={DummyCreateTasksDetails.subTasks}
          renderItem={({item}) => (
            <SubTaskCard
              title={item.name}
              description={item.description}
              isCompleted={item.isCompleted}
            />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  createOrEditTaskContainer: {
    padding: 14,
    paddingTop: 0,
    gap: 18,
    flex: 1,
  },
  actionIconContainer: {
    backgroundColor: Colors.primaryVariant[10],
    borderRadius: 50,
    padding: 8,
  },
  taskName: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createdUserDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  createdUserInfo: {
    color: Colors.black,
    fontSize: 14,
  },
  actionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  taskDetailsContainer: {
    gap: 5,
  },
  heading: {
    color: Colors.black,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '500',
  },
  subTaskHeading: {
    marginBottom: 14,
  },
  subTaskContainer: {
    gap: 20,
  },
});

export default CreateOrEditTask;
