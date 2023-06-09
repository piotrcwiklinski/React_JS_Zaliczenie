import React, { useState } from 'react';

const TaskItem = ({ task, onDeleteTask, onToggleTaskStatus, onEditTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  const handleToggleStatus = () => {
    onToggleTaskStatus(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedTask = { ...task, title: updatedTitle };
    onEditTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTitle(task.title);
  };

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleStatus}
        />
        <label
          className={`form-check-label task-title ${task.completed ? 'completed' : ''}`}
          onClick={handleToggleStatus}
        >
          {task.title}
        </label>
      </div>
      <div className="float-right">
        {isEditing ? (
          <>
            <input type="text" value={updatedTitle} onChange={handleChange} />
            <button className="btn btn-success btn-sm mx-1" onClick={handleSave}>
              Zapisz
            </button>
            <button className="btn btn-secondary btn-sm" onClick={handleCancel}>
              Anuluj
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-primary btn-sm mx-1" onClick={handleEdit}>
              Edytuj
            </button>
            <button className="btn btn-danger btn-sm" onClick={handleDelete}>
              Usuń
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
