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
      toDo: toDo,
      complete: false
    }
    setToDoList([...toDoList, trackedToDo])
    setToDo('')
  }

  const handleComplete = (thisTodo) => {
    const updatedTodos = toDoList.map((toDo, i) => {
      if ( thisTodo === i) {
        toDo.complete =! toDo.complete;
      }
      return toDo
    });
    setToDoList(updatedTodos);
  }

  const handleDelete = (selectedTodo) => {
    const remainingToDos = toDoList.filter((toDo, i) => {
      return i !== selectedTodo;
    });
    setToDoList(remainingToDos)
  }

  const styleComplete = [];
  if (toDo.complete){
    styleComplete.push('line_through');
    
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
          return(
          <div key={i}>
            <input type='checkbox' checked={toDo.complete} onChange={(event) => {handleComplete(i)}}></input>
            <span>{toDo.toDo}</span>
            <button onClick={(e) => handleDelete(i)}>Delete Todo</button>
          </div>
          )
        })
      }
    </div>
  )
}

export default List;