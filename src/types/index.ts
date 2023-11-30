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
  percentage?: number;
  users: User[];
}

export interface TaskState {
  taskList: Task[];
}

export interface User {
  name: string;
  image: string;
}

export interface AvatarProps {
  height: number;
  width: number;
  url: string;
}

export interface AvatarGroupProps {
  users: User[];
}

export interface CarouselIndicatorProps {
  indicatorCount: number;
  selectedIndicator: number;
}

export interface GroupButtonProps {
  buttonList: string[];
  selectedButton: string;
  updateSelectedButton: (selectedButton: string) => void;
}
