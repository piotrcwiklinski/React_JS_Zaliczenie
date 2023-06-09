import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    onAddTask(newTask);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Wprowadź nazwę zadania"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Dodaj Zadanie
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
