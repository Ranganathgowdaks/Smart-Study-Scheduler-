import React, { useState } from "react";
import styles from "./styles/AddClass.module.css";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addClass } from "../../store/classSlice";

const AddClass = ({ onClose, classToEdit }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: classToEdit ? classToEdit.title : "",
    subject: classToEdit ? classToEdit.subject : "",
    time: classToEdit ? classToEdit.time : "",
    type: classToEdit ? classToEdit.type : "Lecture",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedTime = dayjs(formData.time).format("MMM D, h:mm A");

    const newClass = {
      id: classToEdit ? classToEdit.id : Date.now(),
      ...formData,
      time: formattedTime,
      isToday: dayjs(formData.time).isSame(dayjs(), "day"),
      done: false,
    };

    dispatch(addClass(newClass));

    // Close the form after submitting
    onClose();

    // Reset form data
    setFormData({ title: "", subject: "", time: "", type: "Lecture" });
  };

  const handleCancel = () => {
    // Close the form when canceling
    onClose();
    // Optionally reset form data here if you want
    setFormData({ title: "", subject: "", time: "", type: "Lecture" });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {classToEdit ? "Edit Class" : "Add New Class"}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="title">
            Class Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className={styles.input}
            placeholder="Class Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="subject">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={styles.input}
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.grid2}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="time">
              Time:
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className={styles.input}
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="dueDate">
              Due Date:
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              className={styles.input}
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="type">
            Class Type:
          </label>
          <select
            id="type"
            name="type"
            className={styles.select}
            value={formData.type}
            onChange={handleChange}
          >
            <option value="Lecture">Lecture</option>
            <option value="Lab">Lab</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Tutorial">Tutorial</option>
          </select>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveButton}>
            {classToEdit ? "Update Class" : "Add Class"}
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
