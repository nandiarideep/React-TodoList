import React, { useState } from 'react'
import './ToDoInput.css'

const ToDoInput = () => {

  const [tasks, setTasks] = useState(['Eat', 'Sleep', 'Repeat']);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    if (newTask.trim() !== '') {                         // trim() method is used for the add btn, which will not add new inputs as long as it is blank. 
      setTasks(t => [...t,newTask]);
      setNewTask("");
    } 
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((element, i) => i !== index );
    setTasks(updatedTasks);
  }

  return (
    <div className='to-do-list'>
      <h1>Notes</h1>
      <div>
        <input 
          type="text"
          placeholder='Enter a Task...'
          value={newTask}
          onChange={handleInputChange} />
        <button
          className='add-button'
          onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <button
              className='delete-button'
              onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoInput