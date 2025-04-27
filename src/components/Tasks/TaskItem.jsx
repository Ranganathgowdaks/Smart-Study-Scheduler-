import React from "react";
import styles from "./styles/Tasks.module.css";

// Helper function to calculate time left
const calculateTimeLeft = (dueDate) => {
  const now = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDiff = dueDateObj - now; // Time difference in milliseconds

  if (timeDiff <= 0) return "Time's up!"; // Task is overdue

  const hoursLeft = Math.floor(timeDiff / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

  return `${hoursLeft} hours ${minutesLeft} minutes left`;
};

const TaskItem = ({ task, onDelete, onMarkDone, onEdit }) => {
  return (
    <div className={styles.taskCard}>
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => onMarkDone(task.id)}
        />
        <div className={styles.taskInfo}>
          <div className={styles.title}>{task.title}</div>
          <div className={styles.meta}>
            <span className={styles.subject}>{task.subject}</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.actions}>
          <span
            className={styles.icon}
            title="Edit Progress"
            onClick={() => onEdit(task)}
          >
            ✏️
          </span>
          {!task.isDone && (
            <span
              className={styles.icon}
              title="Mark as Done"
              onClick={() => onMarkDone(task.id)}
            >
              ✅
            </span>
          )}
          <span
            className={styles.icon}
            title="Delete"
            onClick={() => onDelete(task.id)}
          >
            🗑️
          </span>
        </div>
        <span>{task.time}</span>
        <span className={styles.arrow}>&#8250;</span>
        <div className={styles.timeLeft}>
          {task.isDone ? "Completed 🎉" : calculateTimeLeft(task.dueDate)}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
