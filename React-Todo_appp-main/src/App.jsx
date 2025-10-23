import { useState, useRef } from 'react'
import './App.css'
import { FiEdit, FiTrash2 } from "react-icons/fi";

const App = () => {

  const [title, settitle] = useState("")
  const [task, settask] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [editValue, seteditValue] = useState("")

  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === "") return;

    if (isEdit) {
      const index = task.indexOf(editValue);
      const updatedTask = [...task];
      updatedTask.splice(index, 1, title);
      settask(updatedTask);
    } else {
      settask((prevTasks) => [...prevTasks, title]);
    }
    setisEdit(false)
    settitle("");
  }


  const handleDelete = (tsk) => {
    // console.log(tsk);
    const updatedTask = task.filter((curTask) => curTask !== tsk)
    settask(updatedTask);
  }

  const handleEdit = (tsk) => {
    setisEdit(true);
    settitle(tsk);
    seteditValue(tsk);
    inputRef.current.focus();
  }

  const handleClear = () => {
    settask([]);
  }


  return (
    <>
      <div className="container">
        <h1>My To Do List</h1>

        <form onSubmit={submitHandler} className="input-container">

          <input type="text"
            placeholder="Add something to your list..."
            value={title}
            ref={inputRef}
            onChange={(e) => {
              settitle(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                submitHandler(e);
              }
            }}
          />

          <button type="submit" className="btn">
            {isEdit ? "Update Task" : "Add Task"}
          </button>

        </form>

        <h2 className='task'>Task List</h2>

        <ul className="task-list">
          {task.length === 0 ? (
            <p className="no-task">No tasks yet</p>
          ) : (

            task.map((tsk, index) => (
              <li key={index} className="task-item">
                {tsk}

                <div className='flex gap-3 '>
                  <button onClick={() => handleEdit(tsk)} className='edit-btn text-yellow-500'>
                    <FiEdit size={25} />
                  </button>

                  <button onClick={() => handleDelete(tsk)} className='delete-btn text-red-500'>
                    <FiTrash2 size={25} />
                  </button>
                </div>

              </li>
            ))
          )}
        </ul>

        {task.length > 0 && (
          <button onClick={handleClear} className='clear-btn'>
            Clear All
          </button>
        )}
      </div>

    </>
  )
}

export default App

