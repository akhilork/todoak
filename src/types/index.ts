import {FC} from 'react';

export interface TabBarProps {
  routeName: string;
  selectedTab: string;
  navigate?: any;
}

export interface AppScreen {
  name: string;
  position: 'LEFT' | 'RIGHT' | 'CIRCLE' | 'CENTER';
  component: FC;
}

export interface Task {
  name: string;
  description?: string;
  date?: string;
}

export interface TaskState {
  taskList: Task[];
}
