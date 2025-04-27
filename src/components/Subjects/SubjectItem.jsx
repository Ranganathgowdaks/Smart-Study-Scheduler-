import React, { useState } from "react";
import styles from "./styles/SubjectItem.module.css";

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
  const [isEditingSubject, setIsEditingSubject] = useState(false);
  const [editedSubjectName, setEditedSubjectName] = useState(subj.name);
  const [editedResources, setEditedResources] = useState(subj.driveLinks);
  const [editedModules, setEditedModules] = useState(subj.modules);

  const handleSubjectNameEdit = () => {
    if (isEditingSubject) {
      subj.name = editedSubjectName; // Save the updated subject name
    }
    setIsEditingSubject(!isEditingSubject);
  };

  // Handle adding a resource
  const handleAddResourceClick = () => {
    setShowFormId("resource-" + subj.id); // Use unique id for resource form
    setNewResource({ title: "", link: "" });
  };

  const handleAddResourceSubmit = () => {
    if (newResource.title && newResource.link) {
      const updatedResources = [...editedResources, newResource];
      setEditedResources(updatedResources);
      handleAddResource(subj.id, newResource); // Dispatch action or any other logic to save the resource
      setNewResource({ title: "", link: "" });
      setShowFormId(null); // Close the resource form after submission
    }
  };

  // Handle adding a module
  const handleAddModuleClick = () => {
    setShowFormId("module-" + subj.id); // Use unique id for module form
    setNewModule("");
  };

  const handleAddModuleSubmit = () => {
    if (newModule) {
      const updatedModules = [
        ...editedModules,
        { name: newModule, isEditing: false },
      ];
      setEditedModules(updatedModules);
      handleAddModule(subj.id, newModule); // Dispatch action or any other logic to save the module
      setNewModule("");
      setShowFormId(null); // Close the module form after submission
    }
  };

  // Delete Resource with confirmation
  const handleDeleteResourceWithConfirmation = (resourceIndex) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      handleDeleteResource(subj.id, resourceIndex);
    }
  };

  // Delete Module with confirmation
  const handleDeleteModuleWithConfirmation = (moduleIndex) => {
    if (window.confirm("Are you sure you want to delete this module?")) {
      handleDeleteModule(subj.id, moduleIndex);
    }
  };

  const handleDeleteSubjectWithConfirmation = () => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      handleDeleteSubject(subj.id);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.subjectHeader}>
        <h3 className={styles.subjectTitle}>
          {isEditingSubject ? (
            <input
              type="text"
              value={editedSubjectName}
              onChange={(e) => setEditedSubjectName(e.target.value)}
            />
          ) : (
            subj.name
          )}
        </h3>
        <div className={styles.iconActions}>
          <span
            className={styles.icon}
            onClick={handleSubjectNameEdit}
            title="Edit Subject"
          >
            {isEditingSubject ? "💾" : "✏️"}
          </span>
          <span
            className={styles.icon}
            onClick={handleDeleteSubjectWithConfirmation}
            title="Delete Subject"
          >
            ❌
          </span>
        </div>
      </div>

      <div className={styles.section}>
        <h5>📁 Resources:</h5>
        <ul className={styles.linkList}>
          {editedResources.map((res, index) => (
            <li key={index} className={styles.inlineItem}>
              <div className={styles.inlineText}>
                {res.isEditing ? (
                  <>
                    <input
                      type="text"
                      value={res.title}
                      onChange={(e) => {
                        const updatedResources = [...editedResources];
                        updatedResources[index].title = e.target.value;
                        setEditedResources(updatedResources);
                      }}
                    />
                    <input
                      type="text"
                      value={res.link}
                      onChange={(e) => {
                        const updatedResources = [...editedResources];
                        updatedResources[index].link = e.target.value;
                        setEditedResources(updatedResources);
                      }}
                    />
                  </>
                ) : (
                  <>
                    <strong>{res.title}:</strong>{" "}
                    <a href={res.link} target="_blank" rel="noreferrer">
                      {res.link}
                    </a>
                  </>
                )}
              </div>

              <div className={styles.iconContainer}>
                <span
                  className={styles.icon}
                  title={res.isEditing ? "Save Resource" : "Edit Resource"}
                  onClick={() => {
                    const updatedResources = [...editedResources];
                    updatedResources[index].isEditing =
                      !updatedResources[index].isEditing;
                    setEditedResources(updatedResources);
                  }}
                >
                  {res.isEditing ? "💾" : "✏️"}
                </span>
                <span
                  className={styles.icon}
                  title="Delete Resource"
                  onClick={() => handleDeleteResourceWithConfirmation(index)}
                >
                  ❌
                </span>
              </div>
            </li>
          ))}
        </ul>

        {showFormId === "resource-" + subj.id ? (
          <div className={styles.resourceForm}>
            <input
              type="text"
              placeholder="Title"
              value={newResource.title}
              onChange={(e) =>
                setNewResource({ ...newResource, title: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Drive link"
              value={newResource.link}
              onChange={(e) =>
                setNewResource({ ...newResource, link: e.target.value })
              }
            />
            <button onClick={handleAddResourceSubmit}>Add</button>
            <button onClick={() => setShowFormId(null)}>Cancel</button>
          </div>
        ) : (
          <button
            className={styles.addResourceButton}
            onClick={handleAddResourceClick}
          >
            + Add Resource
          </button>
        )}
      </div>

      <div className={styles.section}>
        <h5>📚 Modules:</h5>
        <ul className={styles.moduleList}>
          {editedModules.map((mod, idx) => (
            <li key={idx} className={styles.inlineItem}>
              {mod.isEditing ? (
                <input
                  type="text"
                  value={mod.name}
                  onChange={(e) => {
                    const updatedModules = [...editedModules];
                    updatedModules[idx].name = e.target.value;
                    setEditedModules(updatedModules);
                  }}
                />
              ) : (
                <div className={styles.inlineText}>{mod.name}</div>
              )}

              <div className={styles.iconContainer}>
                <span
                  className={styles.icon}
                  title={mod.isEditing ? "Save Module" : "Edit Module"}
                  onClick={() => {
                    const updatedModules = [...editedModules];
                    updatedModules[idx].isEditing =
                      !updatedModules[idx].isEditing;
                    setEditedModules(updatedModules);
                  }}
                >
                  {mod.isEditing ? "💾" : "✏️"}
                </span>
                <span
                  className={styles.icon}
                  title="Delete Module"
                  onClick={() => handleDeleteModuleWithConfirmation(idx)}
                >
                  ❌
                </span>
              </div>
            </li>
          ))}
        </ul>

        {showFormId === "module-" + subj.id ? (
          <div className={styles.resourceForm}>
            <input
              type="text"
              placeholder="Module Name"
              value={newModule}
              onChange={(e) => setNewModule(e.target.value)}
            />
            <button onClick={handleAddModuleSubmit}>Add</button>
            <button onClick={() => setShowFormId(null)}>Cancel</button>
          </div>
        ) : (
          <button
            className={styles.addResourceButton}
            onClick={handleAddModuleClick}
          >
            + Add Module
          </button>
        )}
      </div>
    </div>
  );
};

export default SubjectItem;
