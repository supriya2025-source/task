import React, { useState } from 'react';
import { addTask, updateTask } from '../services/api';

export interface Task {
  id?: string;
  title: string;
  description: string;
}

interface TaskFormProps {
  task?: Task;
}

const TaskForm: React.FC<TaskFormProps> = ({ task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task?.id) {
      await updateTask(task.id, { title, description });
    } else {
      await addTask({ title, description });
    }
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>{task ? 'Edit Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">{task ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default TaskForm;