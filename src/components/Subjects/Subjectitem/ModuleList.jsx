import React from "react";
import styles from "../styles/SubjectItem.module.css";

const ModuleList = ({
  subj,
  editedModules,
  showFormId,
  setShowFormId,
  newModule,
  setNewModule,
  handleAddModuleClick,
  handleAddModuleSubmit,
  handleModuleEditToggle,
  handleModuleChange,
  handleDeleteModuleWithConfirmation,
}) => {
  return (
    <div className={styles.section}>
      <h5>📚 Modules:</h5>
      <ul className={styles.moduleList}>
        {editedModules.map((mod, idx) => (
          <li key={idx} className={styles.inlineItem}>
            {mod.isEditing ? (
              <input
                type="text"
                value={mod.name}
                onChange={(e) => handleModuleChange(idx, e.target.value)}
              />
            ) : (
              <div className={styles.inlineText}>{mod.name}</div>
            )}

            <div className={styles.iconContainer}>
              <span
                className={styles.icon}
                onClick={() => handleModuleEditToggle(idx)}
                title={mod.isEditing ? "Save Module" : "Edit Module"}
              >
                {mod.isEditing ? "💾" : "✏️"}
              </span>
              <span
                className={styles.icon}
                onClick={() => handleDeleteModuleWithConfirmation(idx)}
                title="Delete Module"
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
  );
};

export default ModuleList;
