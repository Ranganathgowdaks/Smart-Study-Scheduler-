import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import classReducer from "./classSlice";
import subjectReducer from "./subjectsSlice";
import authReducer from "./authSlice";

const smartStore = configureStore({
  reducer: {
    tasks: taskReducer,
    classes: classReducer,
    subjects: subjectReducer,
    auth: authReducer,
  },
});

export default smartStore;
