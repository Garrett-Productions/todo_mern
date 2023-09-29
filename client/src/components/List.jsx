import React, { useState } from 'react'

const List = () => {

  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (toDo.length === 0) {
      return;
    }
    const trackedToDo = {
      key: toDo,
      complete: false
    }
    setToDoList([...toDoList, trackedToDo])
    setToDo('')
  }
  return (
    <div>
      <form onSubmit={(e) => {handleSubmit}}>
        <label>
          Insert Todo:
        </label>
        <input type='text' name='toDo' value={toDo} onChange={(e)=> setToDo(e.target.value)}></input>
        <button> Add Todo</button>
      </form>
      <hr/>
    </div>
  )
}

export default List;