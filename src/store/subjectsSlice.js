import { createSlice } from "@reduxjs/toolkit";

// Initial state for subjects
const initialState = [];

const subjectSlice = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    addSubject: (state, action) => {
      // Add a new subject with an auto-generated ID
      state.push({
        ...action.payload,
        id: state.length + 1,
        driveLinks: [],
        modules: [],
      });
    },
    editSubjectName: (state, action) => {
      const { subjectId, newName } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject) {
        subject.name = newName;
      }
    },
    addResource: (state, action) => {
      const { subjectId, resource } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject) {
        subject.driveLinks.push(resource);
      }
    },
    editResource: (state, action) => {
      const { subjectId, resourceIndex, newResource } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject && subject.driveLinks[resourceIndex]) {
        subject.driveLinks[resourceIndex] = newResource;
      }
    },
    deleteResource: (state, action) => {
      const { subjectId, resourceIndex } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject) {
        subject.driveLinks = subject.driveLinks.filter(
          (_, idx) => idx !== resourceIndex
        );
      }
    },
    addModule: (state, action) => {
      const { subjectId, module } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject) {
        subject.modules.push(module);
      }
    },
    editModule: (state, action) => {
      const { subjectId, moduleIndex, newModule } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject && subject.modules[moduleIndex]) {
        subject.modules[moduleIndex] = newModule;
      }
    },
    deleteModule: (state, action) => {
      const { subjectId, moduleIndex } = action.payload;
      const subject = state.find((subj) => subj.id === subjectId);
      if (subject) {
        subject.modules = subject.modules.filter(
          (_, idx) => idx !== moduleIndex
        );
      }
    },
    deleteSubject: (state, action) => {
      const subjectId = action.payload;
      return state.filter((subj) => subj.id !== subjectId);
    },
  },
});

export const {
  addSubject,
  editSubjectName,
  addResource,
  editResource,
  deleteResource,
  addModule,
  editModule,
  deleteModule,
  deleteSubject,
} = subjectSlice.actions;

export default subjectSlice.reducer;
