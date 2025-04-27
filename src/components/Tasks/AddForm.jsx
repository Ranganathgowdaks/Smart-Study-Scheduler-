import React, { useState, useEffect } from "react";
import styles from "./styles/AddForm.module.css";

const AddForm = ({ closeForm, taskToEdit, addTask, updateTask }) => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    time: "",
    dueDate: "",
  });

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        ...taskToEdit,
        dueDate: taskToEdit.dueDate.split("T")[0], // Ensure only the date part
      });
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      ...formData,
      id: taskToEdit ? taskToEdit.id : crypto.randomUUID(),
    };

    // If editing an existing task, update it; otherwise, add a new one
    taskToEdit ? updateTask(newTask) : addTask(newTask);

    // Close the form after submission
    closeForm();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {taskToEdit ? "✏️ Edit Task" : "📝 New Task"}
      </h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter task title"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Subject *</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={styles.input}
            placeholder="Enter subject"
            required
          />
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Time *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Due Date *</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={closeForm}
          >
            Cancel
          </button>
          <button type="submit" className={styles.saveButton}>
            {taskToEdit ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
