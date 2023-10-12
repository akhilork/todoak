import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Task {
  name: string;
  description?: string;
  date?: string;
}

interface TaskState {
  taskList: Task[];
}

// Define the initial state using that type
const initialState: TaskState = {
  taskList: [],
};

export const authSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<Task[]>) => {
      state.taskList = action.payload;
    },
  },
});

export const {setTaskList} = authSlice.actions;

export default authSlice.reducer;
