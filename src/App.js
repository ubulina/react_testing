import React, { useState }  from 'react';
import './App.css';
import TodoTable from './TodoTable';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <input type="date" name="date" value={todo.date} onChange={inputChanged}/>
      <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} />
    </div>
  );
}

export default App;