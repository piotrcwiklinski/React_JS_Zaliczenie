import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import logo from './logo.jpg'

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, title: updatedTask.title, completed: updatedTask.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const fetchSingleTask = async () => {
    try {
      const randomId = Math.floor(Math.random() * 200) + 1;
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
      const data = await response.json();
      const newTask = {
        id: data.id,
        title: data.title,
        completed: false
      };
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.log('Błąd podczas pobierania pojedynczego zadania:', error);
    }
  };

  return (
    <div className="container">
      <p></p>
      <h1>Aplikacja "Lista Zadań"</h1>
      <h1><img src={logo} alt="Logo" height={250} width={250}/></h1>
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskStatus={toggleTaskStatus}
        onEditTask={editTask}
      />
      <TaskForm onAddTask={addTask} />
      <button className="btn btn-primary" onClick={fetchSingleTask}>
        Pobierz Losowe Zadanie
      </button>
    </div>
  );
};

export default App;
