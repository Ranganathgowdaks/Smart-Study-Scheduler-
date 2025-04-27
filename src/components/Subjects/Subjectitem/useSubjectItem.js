import { useState } from "react";

export const useSubjectItem = ({
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
}) => {
  const [isEditingSubject, setIsEditingSubject] = useState(false);
  const [editedSubjectName, setEditedSubjectName] = useState(subj.name);
  const [editedResources, setEditedResources] = useState(subj.driveLinks || []);
  const [editedModules, setEditedModules] = useState(subj.modules || []);

  const handleSubjectNameEdit = () => {
    if (isEditingSubject) {
      subj.name = editedSubjectName;
    }
    setIsEditingSubject(!isEditingSubject);
  };

  const handleResourceEditToggle = (index) => {
    const updatedResources = [...editedResources];
    updatedResources[index].isEditing = !updatedResources[index].isEditing;
    setEditedResources(updatedResources);
  };

  const handleModuleEditToggle = (index) => {
    const updatedModules = [...editedModules];
    updatedModules[index].isEditing = !updatedModules[index].isEditing;
    setEditedModules(updatedModules);
  };

  const handleResourceChange = (index, field, value) => {
    const updatedResources = [...editedResources];
    updatedResources[index][field] = value;
    setEditedResources(updatedResources);
  };

  const handleModuleChange = (index, value) => {
    const updatedModules = [...editedModules];
    updatedModules[index].name = value;
    setEditedModules(updatedModules);
  };

  const handleDeleteResourceWithConfirmation = (index) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      handleDeleteResource(subj.id, index);
    }
  };

  const handleDeleteModuleWithConfirmation = (index) => {
    if (window.confirm("Are you sure you want to delete this module?")) {
      handleDeleteModule(subj.id, index);
    }
  };

  const handleDeleteSubjectWithConfirmation = () => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      handleDeleteSubject(subj.id);
    }
  };

  const handleAddResourceClick = () => {
    setShowFormId("resource-" + subj.id);
    setNewResource({ title: "", link: "" });
  };

  const handleAddResourceSubmit = () => {
    if (newResource.title && newResource.link) {
      handleAddResource(subj.id, newResource);
      setNewResource({ title: "", link: "" });
      setShowFormId(null);
    }
  };

  const handleAddModuleClick = () => {
    setShowFormId("module-" + subj.id);
    setNewModule("");
  };

  const handleAddModuleSubmit = () => {
    if (newModule) {
      handleAddModule(subj.id, newModule);
      setNewModule("");
      setShowFormId(null);
    }
  };

  return {
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
  };
};
