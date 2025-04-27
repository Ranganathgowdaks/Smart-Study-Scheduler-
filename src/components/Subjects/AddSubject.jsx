import React, { useState } from "react";
import styles from "./styles/AddSubject.module.css";

const AddSubject = ({ onAdd }) => {
  const [subjectName, setSubjectName] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (subjectName) {
      onAdd({ name: subjectName, driveLinks: [], modules: [] });
      setSubjectName(""); // Reset the form
    }
  };

  return (
    <form className={styles.form} onSubmit={handleAddSubmit}>
      <input
        type="text"
        placeholder="Enter subject name"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default AddSubject;
