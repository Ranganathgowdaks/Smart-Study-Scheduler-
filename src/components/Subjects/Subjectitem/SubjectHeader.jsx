import React from "react";
import styles from "../styles/SubjectItem.module.css";

const SubjectHeader = ({
  isEditingSubject,
  editedSubjectName,
  handleSubjectNameEdit,
  handleDeleteSubjectWithConfirmation,
  subjName,
}) => {
  return (
    <div className={styles.subjectHeader}>
      <h3 className={styles.subjectTitle}>
        {isEditingSubject ? (
          <input
            type="text"
            value={editedSubjectName}
            onChange={(e) => handleSubjectNameEdit(e.target.value)}
          />
        ) : (
          subjName
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
  );
};

export default SubjectHeader;
