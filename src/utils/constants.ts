import {Colors} from '@app/styles';

export const TaskPriorityList = ['High', 'Medium', 'Low'];

export const PriorityList = [
  {title: 'High', color: Colors.danger, textColor: Colors.white},
  {title: 'Medium', color: Colors.warning, textColor: Colors.white},
  {title: 'Low', color: Colors.success, textColor: Colors.white},
];

export const StatusList = [
  {title: 'TODO', color: Colors.info, textColor: Colors.white},
  {title: 'Running', color: Colors.warning, textColor: Colors.white},
  {title: 'Complete', color: Colors.success, textColor: Colors.white},
];

export const TaskMenuItem = [
  {
    value: 'markAscomplete',
    label: 'Mark as complete',
    icon: 'checkcircleo',
  },
  {
    value: 'edit',
    label: 'Edit',
    icon: 'edit',
  },
  {
    value: 'delete',
    label: 'Delete',
    icon: 'delete',
  },
];

export const UsersList = [
  {
    name: 'User 1',
    image: 'https://mui.com/static/images/avatar/1.jpg',
  },
  {
    name: 'User 2',
    image: 'https://mui.com/static/images/avatar/2.jpg',
  },
  {
    name: 'User 3',
    image: 'https://mui.com/static/images/avatar/3.jpg',
  },
  {
    name: 'User 4',
    image: 'https://mui.com/static/images/avatar/1.jpg',
  },
  {
    name: 'User 5',
    image: 'https://mui.com/static/images/avatar/2.jpg',
  },
  {
    name: 'User 6',
    image: 'https://mui.com/static/images/avatar/3.jpg',
  },
];

export const TasksList = [
  {
    id: '1',
    name: 'Design Surplus Shot',
    description: 'Design a surplus shot related to task management',
    date: '4 July',
    startTime: '10 am',
    endTime: '01 pm',
    percentage: 33,
    status: 'Running',
    users: UsersList,
  },
  {
    id: '2',
    name: 'Design UI Design Update',
    description: 'Design a Surplus UI design related to task management',
    date: '4 July',
    startTime: '02 pm',
    endTime: '03 pm',
    percentage: 40,
    status: 'Completed',
    users: UsersList,
  },
  {
    id: '3',
    name: 'Design Surplus Shot',
    description: 'Design a surplus shot related to task management',
    date: '4 July',
    startTime: '04 pm',
    endTime: '05 pm',
    percentage: 84,
    status: 'Todo',
    users: UsersList,
  },
  {
    id: '4',
    name: 'Design UI Design Update',
    description: 'Design a Surplus UI design related to task management',
    date: '4 July',
    startTime: '05 pm',
    endTime: '06 pm',
    percentage: 70,
    status: 'Running',
    users: UsersList,
  },
];

export const DummyCreateTasksDetails = {
  name: 'Design Surplus Shot',
  description:
    'Design a surplus shot related to task management or printing and typeset...',
  date: '4 July',
  percentage: 33,
  status: 'Running',
  priority: 'High',
  user: {
    name: 'Akhil',
    image: 'https://mui.com/static/images/avatar/1.jpg',
  },
  subTasks: [
    {
      name: 'Task 1',
      description: 'Desian a e-commerce website',
      isCompleted: true,
    },
    {
      name: 'Task 2',
      description: 'Design a landing page for food delivery.',
      isCompleted: true,
    },
    {
      name: 'Task 3',
      description: 'Design a mobile app for vendor.',
      isCompleted: false,
    },
  ],
};
