import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onToggleTaskStatus, onEditTask }) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTaskStatus={onToggleTaskStatus}
          onEditTask={onEditTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
