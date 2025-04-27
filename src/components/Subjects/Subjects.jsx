import React, { useState } from "react";
import AddSubject from "./AddSubject";
import SubjectItem from "./SubjectItem";
import styles from "./styles/Subjects.module.css";

const Subjects = () => {
  const [subjects, setSubjects] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showFormId, setShowFormId] = useState(null);
  const [newResource, setNewResource] = useState({ title: "", link: "" });
  const [newModule, setNewModule] = useState("");

  const handleAddSubject = (newSubject) => {
    setSubjects([
      ...subjects,
      { ...newSubject, id: subjects.length + 1, driveLinks: [], modules: [] },
    ]);
    setShowAddForm(false);
  };

  const handleDeleteResource = (subjectId, indexToRemove) => {
    const updatedSubjects = subjects.map((subj) => {
      if (subj.id === subjectId) {
        return {
          ...subj,
          driveLinks: subj.driveLinks.filter((_, idx) => idx !== indexToRemove),
        };
      }
      return subj;
    });
    setSubjects(updatedSubjects); // Update the state with the new subjects array
  };

  const handleDeleteModule = (subjectId, indexToRemove) => {
    const updatedSubjects = subjects.map((subj) => {
      if (subj.id === subjectId) {
        return {
          ...subj,
          modules: subj.modules.filter((_, idx) => idx !== indexToRemove),
        };
      }
      return subj;
    });
    setSubjects(updatedSubjects); // Update the state with the new subjects array
  };

  const handleDeleteSubject = (subjectId) => {
    const updatedSubjects = subjects.filter((subj) => subj.id !== subjectId);
    setSubjects(updatedSubjects); // Update the state with the new subjects array
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>📘 Subjects</h2>
        <button
          className={styles.addSubjectButton}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Cancel" : "+ Add Subject"}
        </button>
      </div>

      {showAddForm && <AddSubject onAdd={handleAddSubject} />}

      <div className={styles.subjectList}>
        {subjects.length === 0 ? (
          <p>No subjects available. Please add one.</p>
        ) : (
          subjects.map((subj) => (
            <SubjectItem
              key={subj.id}
              subj={subj}
              showFormId={showFormId}
              setShowFormId={setShowFormId}
              newResource={newResource}
              setNewResource={setNewResource}
              handleAddResource={() => {}}
              handleDeleteResource={handleDeleteResource}
              newModule={newModule}
              setNewModule={setNewModule}
              handleAddModule={() => {}}
              handleDeleteModule={handleDeleteModule}
              handleDeleteSubject={handleDeleteSubject}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Subjects;
