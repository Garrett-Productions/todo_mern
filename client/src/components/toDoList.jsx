import React, { useState } from 'react'

const toDoList = () => {

  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState([]);


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

export default toDoList