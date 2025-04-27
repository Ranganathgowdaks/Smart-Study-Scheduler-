import React, { useState } from "react";
import styles from "./styles/Tasks.module.css";
import AddForm from "./AddForm"; // Import the AddForm component
import TaskItem from "./TaskItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  updateTask,
  markTaskDone,
} from "../../store/taskSlice";

const Tasks = () => {
  const [showAddForm, setShowAddForm] = useState(false); // State to control form visibility
  const [editTask, setEditTask] = useState(null); // State to handle editing an existing task

  const tasks = useSelector((state) => state.tasks.tasks); // Get tasks from Redux store
  const dispatch = useDispatch();

  const handleAddTaskClick = () => {
    setShowAddForm(!showAddForm); // Toggle the form visibility
    setEditTask(null); // Reset edit task state when adding a new task
  };

  const closeForm = () => {
    setShowAddForm(false); // Close the form when Cancel is clicked
  };

  const handleMarkDone = (taskId) => {
    if (window.confirm("Are you sure you completed the task?")) {
      dispatch(markTaskDone(taskId)); // Delete the task when marked as done
    }
  };

  const handleEditTask = (task) => {
    setShowAddForm(true); // Open the form to edit task
    setEditTask(task); // Set the task to be edited
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Delete the task
  };

  const filterUpcomingTasks = (task) => {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    return dueDate > today; // Tasks with due date in the future (Upcoming)
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>📋 Tasks Page</h2>
        <button className={styles.addButton} onClick={handleAddTaskClick}>
          + Add new Task
        </button>
      </div>
      <hr />
      {showAddForm && (
        <AddForm
          closeForm={closeForm}
          taskToEdit={editTask}
          addTask={(task) => dispatch(addTask(task))}
          updateTask={(task) => dispatch(updateTask(task))}
        />
      )}
      <section>
        <h4 className={styles.sectionTitle}>Today</h4>
        {tasks
          .filter(
            (task) =>
              new Date(task.dueDate).toDateString() ===
              new Date().toDateString()
          )
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onMarkDone={handleMarkDone}
              onEdit={handleEditTask}
            />
          ))}
      </section>
      <section>
        <h4 className={styles.sectionTitle}>Upcoming</h4>
        {tasks
          .filter((task) => filterUpcomingTasks(task))
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onMarkDone={handleMarkDone}
              onEdit={handleEditTask}
            />
          ))}
      </section>
    </div>
  );
};

export default Tasks;
