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
      <form onSubmit={(e) => {handleSubmit(e)}}>
        <label>
          Insert Todo:
        </label>
        <input type='text' name='toDo' value={toDo} onChange={(e)=> setToDo(e.target.value)}></input>
        <button> Add Todo</button>
      </form>
      <hr/>
      {
        toDoList.map((toDo,i) => {
          <div key={i}>
            <input type='checkbox' checked={toDo.complete} onChange={(event) => {handleComplete(i)}}/>
            <button onClick={(e) => handleDelete(i)}>Delete Todo</button>
          </div>
        })
      }
    </div>
  )
}

export default List;