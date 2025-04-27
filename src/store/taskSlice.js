// src/redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, isDone: false }); // Always add new task as pending
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = { ...action.payload }; // Update entire task
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    markTaskDone: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isDone = true; // 🆕 Just mark as done
      }
    },
  },
});

export const { addTask, updateTask, deleteTask, markTaskDone } =
  taskSlice.actions;
export default taskSlice.reducer;
