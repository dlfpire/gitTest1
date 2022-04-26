import { useState } from 'react';

// Todo List에 추가하는 것 까지 

const TodoAdd = () => {
  const [todo, setTodo] = useState('')    // object (todo)
  const [todos, setTodos] = useState([])  // array of objects

  const handleInput = e => ___________;

  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(_____________________________)
    setTodo(_________________);
  }

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {____________________________}
      </ul>
      <input onChange={handleInput} value={todo} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default TodoAdd;