import React, { useState } from "react";
import styles from "./styles/Classes.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteClass } from "../../store/classSlice";
import AddClass from "./AddClass";
import ClassItem from "./ClassItem";

const Classes = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [classToEdit, setClassToEdit] = useState(null); // State for the class to be edited
  const classes = useSelector((state) => state.classes.classes);

  const todayClasses = classes.filter((c) => c.isToday);
  const upcomingClasses = classes.filter((c) => !c.isToday);

  const handleDeleteClass = (id) => {
    dispatch(deleteClass(id));
  };

  const handleEditClass = (classInfo) => {
    setClassToEdit(classInfo); // Set the class info for editing
    setShowForm(true); // Open the form to edit
  };

  const handleCloseForm = () => {
    setShowForm(false); // Close the form
    setClassToEdit(null); // Clear the class to edit
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>📚 Classes Page</h2>
        <button className={styles.addButton} onClick={() => setShowForm(true)}>
          + Add new Class
        </button>
      </div>
      <hr />

      {showForm && (
        <AddClass
          onClose={handleCloseForm} // Pass handleCloseForm to AddClass
          classToEdit={classToEdit} // Pass the class to edit to AddClass
        />
      )}

      <section>
        <h4 className={styles.sectionTitle}>Today</h4>
        {todayClasses.length > 0 ? (
          todayClasses.map((classInfo) => (
            <ClassItem
              key={classInfo.id}
              classInfo={classInfo}
              onDelete={handleDeleteClass}
              onEdit={handleEditClass} // Pass the handleEditClass to open edit form
            />
          ))
        ) : (
          <p className={styles.empty}>No classes today.</p>
        )}
      </section>

      <section>
        <h4 className={styles.sectionTitle}>Upcoming</h4>
        {upcomingClasses.length > 0 ? (
          upcomingClasses.map((classInfo) => (
            <ClassItem
              key={classInfo.id}
              classInfo={classInfo}
              onDelete={handleDeleteClass}
              onEdit={handleEditClass} // Pass the handleEditClass to open edit form
            />
          ))
        ) : (
          <p className={styles.empty}>No upcoming classes.</p>
        )}
      </section>
    </div>
  );
};

export default Classes;
