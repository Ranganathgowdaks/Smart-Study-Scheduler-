import React from "react";
import { useSubjectItem } from "./useSubjectItem";
import SubjectHeader from "./SubjectHeader";
import ResourceList from "./ResourceList";
import ModuleList from "./ModuleList";
import styles from "../styles/SubjectItem.module.css";

const SubjectItem = ({
  subj,
  showFormId,
  setShowFormId,
  newResource,
  setNewResource,
  handleAddResource,
  handleDeleteResource,
  newModule,
  setNewModule,
  handleAddModule,
  handleDeleteModule,
  handleDeleteSubject,
}) => {
  const {
    isEditingSubject,
    editedSubjectName,
    editedResources,
    editedModules,
    handleSubjectNameEdit,
    handleResourceEditToggle,
    handleModuleEditToggle,
    handleResourceChange,
    handleModuleChange,
    handleDeleteResourceWithConfirmation,
    handleDeleteModuleWithConfirmation,
    handleDeleteSubjectWithConfirmation,
    handleAddResourceClick,
    handleAddResourceSubmit,
    handleAddModuleClick,
    handleAddModuleSubmit,
  } = useSubjectItem({
    subj,
    setShowFormId,
    setNewResource,
    handleAddResource,
    setNewModule,
    handleAddModule,
    handleDeleteResource,
    handleDeleteModule,
    handleDeleteSubject,
    newResource,
    newModule,
  });

  return (
    <div className={styles.card}>
      <SubjectHeader
        isEditingSubject={isEditingSubject}
        editedSubjectName={editedSubjectName}
        handleSubjectNameEdit={handleSubjectNameEdit}
        handleDeleteSubjectWithConfirmation={
          handleDeleteSubjectWithConfirmation
        }
        subjName={subj.name}
      />

      <ResourceList
        subj={subj}
        editedResources={editedResources}
        showFormId={showFormId}
        setShowFormId={setShowFormId}
        newResource={newResource}
        setNewResource={setNewResource}
        handleAddResourceClick={handleAddResourceClick}
        handleAddResourceSubmit={handleAddResourceSubmit}
        handleResourceEditToggle={handleResourceEditToggle}
        handleResourceChange={handleResourceChange}
        handleDeleteResourceWithConfirmation={
          handleDeleteResourceWithConfirmation
        }
      />

      <ModuleList
        subj={subj}
        editedModules={editedModules}
        showFormId={showFormId}
        setShowFormId={setShowFormId}
        newModule={newModule}
        setNewModule={setNewModule}
        handleAddModuleClick={handleAddModuleClick}
        handleAddModuleSubmit={handleAddModuleSubmit}
        handleModuleEditToggle={handleModuleEditToggle}
        handleModuleChange={handleModuleChange}
        handleDeleteModuleWithConfirmation={handleDeleteModuleWithConfirmation}
      />
    </div>
  );
};

export default SubjectItem;
