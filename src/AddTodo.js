import React, { memo } from 'react'


const AddTodo = ({todos,addtodo}) => {
    console.log('child render')
  return (
    <>
      <h2>MyTodos</h2>
      {todos.map((gopi,index)=>{
        return <p key={index}>{gopi}</p>
      })}
    <button onClick={addtodo}>Add Todo</button>
    </>
  )
}

export default memo(AddTodo)
