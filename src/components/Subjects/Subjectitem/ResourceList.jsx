import React from "react";
import styles from "../styles/SubjectItem.module.css";

const ResourceList = ({
  subj,
  editedResources,
  showFormId,
  setShowFormId,
  newResource,
  setNewResource,
  handleAddResourceClick,
  handleAddResourceSubmit,
  handleResourceEditToggle,
  handleResourceChange,
  handleDeleteResourceWithConfirmation,
}) => {
  return (
    <div className={styles.section}>
      <h5>📁 Resources:</h5>
      <ul className={styles.linkList}>
        {editedResources.map((res, index) => (
          <li key={index} className={styles.inlineItem}>
            <div className={styles.inlineText}>
              {res.isEditing ? (
                <>
                  <input
                    type="text"
                    value={res.title}
                    onChange={(e) =>
                      handleResourceChange(index, "title", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    value={res.link}
                    onChange={(e) =>
                      handleResourceChange(index, "link", e.target.value)
                    }
                  />
                </>
              ) : (
                <>
                  <strong>{res.title}:</strong>{" "}
                  <a href={res.link} target="_blank" rel="noreferrer">
                    {res.link}
                  </a>
                </>
              )}
            </div>
            <div className={styles.iconContainer}>
              <span
                className={styles.icon}
                onClick={() => handleResourceEditToggle(index)}
                title={res.isEditing ? "Save Resource" : "Edit Resource"}
              >
                {res.isEditing ? "💾" : "✏️"}
              </span>
              <span
                className={styles.icon}
                onClick={() => handleDeleteResourceWithConfirmation(index)}
                title="Delete Resource"
              >
                ❌
              </span>
            </div>
          </li>
        ))}
      </ul>

      {showFormId === "resource-" + subj.id ? (
        <div className={styles.resourceForm}>
          <input
            type="text"
            placeholder="Title"
            value={newResource.title}
            onChange={(e) =>
              setNewResource({ ...newResource, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Drive link"
            value={newResource.link}
            onChange={(e) =>
              setNewResource({ ...newResource, link: e.target.value })
            }
          />
          <button onClick={handleAddResourceSubmit}>Add</button>
          <button onClick={() => setShowFormId(null)}>Cancel</button>
        </div>
      ) : (
        <button
          className={styles.addResourceButton}
          onClick={handleAddResourceClick}
        >
          + Add Resource
        </button>
      )}
    </div>
  );
};

export default ResourceList;
