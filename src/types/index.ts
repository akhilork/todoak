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
  status?: string;
  users: User[];
  openMenu?: () => void;
}

export interface TaskState {
  taskList: Task[];
  openTaskModel: boolean;
}

export interface User {
  name: string;
  image: string;
}

export interface BottomSheetProps {
  visible: boolean;
  snapPointValues: Array<number | string>;
  sheetModalBackground?: string;
  onDismiss: () => void;
  children: React.ReactNode;
}

export interface MenuItemProps {
  label: string;
  icon: string;
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

export interface ProgressBarProps {
  percentage: number;
  height: number;
  width?: number | null;
  borderWidth: number;
  unfilledColor: string;
  color: string;
  progressPercentageColor?: string;
}

export interface SelectItem {
  title: string;
  color?: string;
  textColor?: string;
}

export interface SelectDropdownProps {
  data: Array<SelectItem>;
  placeholder: string;
  defaultValue?: SelectItem;
}

export interface SubTaskCardProps {
  title: string;
  description: string;
  isCompleted: boolean;
}
