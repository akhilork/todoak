import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Task, TaskState} from '@app/types';

// Define the initial state using that type
const initialState: TaskState = {
  taskList: [],
  openTaskModel: false,
};

export const authSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTaskList: (state, action: PayloadAction<Task[]>) => {
      state.taskList = action.payload;
    },
    setOpenTaskModel: (state, action: PayloadAction<boolean>) => {
      state.openTaskModel = action.payload;
    },
  },
});

export const {setTaskList, setOpenTaskModel} = authSlice.actions;

export default authSlice.reducer;
