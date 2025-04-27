import React, { useState } from "react";
import styles from "./styles/Classes.module.css";
import { useDispatch } from "react-redux";
import {
  deleteClass,
  updateClass,
  markClassDone,
} from "../../store/classSlice";
import dayjs from "dayjs";

const ClassItem = ({ classInfo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: classInfo.title,
    subject: classInfo.subject,
    time: dayjs(classInfo.time, "MMM D, h:mm A").format("YYYY-MM-DDTHH:mm"),
    type: classInfo.type,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedClass = {
      ...classInfo,
      ...formData,
      time: dayjs(formData.time).format("MMM D, h:mm A"),
      isToday: dayjs(formData.time).isSame(dayjs(), "day"),
    };
    dispatch(updateClass(updatedClass));
    setIsEditing(false);
  };

  const handleMarkDone = () => {
    // Asking if the user finished the class
    const isFinished = window.confirm(
      "Did you finish this class? If yes, it will be deleted."
    );
    if (isFinished) {
      dispatch(deleteClass(classInfo.id)); // Delete the class if confirmed as finished
    } else {
      dispatch(markClassDone(classInfo.id)); // Just mark as done if not deleted
    }
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this class?"
    );
    if (isConfirmed) {
      dispatch(deleteClass(classInfo.id)); // Directly delete the class
    }
  };

  return (
    <div className={`${styles.classCard} ${classInfo.done ? styles.done : ""}`}>
      {!isEditing ? (
        <>
          <div className={styles.left}>
            <input
              type="checkbox"
              checked={classInfo.done}
              onChange={handleMarkDone}
            />
            <div>
              <div className={styles.title}>{classInfo.title}</div>
              <div className={styles.meta}>
                {classInfo.subject} • {classInfo.type}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <span>{classInfo.time}</span>
            <span className={styles.icon} onClick={() => setIsEditing(true)}>
              ✏️
            </span>
            {/* Right Mark (✅) and Delete (🗑️) icons */}
            <span className={styles.icon} onClick={handleMarkDone}>
              ✅
            </span>{" "}
            {/* Right mark */}
            <span className={styles.icon} onClick={handleDelete}>
              🗑️
            </span>{" "}
            {/* Delete button */}
          </div>
        </>
      ) : (
        <form onSubmit={handleSave} className={styles.editForm}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Lecture">Lecture</option>
            <option value="Lab">Lab</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Tutorial">Tutorial</option>
          </select>
          <button type="submit" className={styles.saveButton}>
            Save
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ClassItem;
