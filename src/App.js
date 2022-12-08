import { useState} from 'react';
import Header from './components/Header';
import List from './components/List';
import React from 'react';
import uniqid from 'uniqid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState({
    name: '',
    complete: false,
    id: ''
  });
  const [error, setError] = useState(false);

  function handleChange(e) {
    setTodo({
      ...todo,
        name: e.target.value,
    });
  }

  function handleAdd(newTodo) {
    setTodoList([
      ...todoList,
         newTodo
    ])
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!todo.name) {
      setError(true);
    } else {    
      handleAdd({
        ...todo,
           id: uniqid()
      })
      setError(false);
      setTodo({
        ...todo,
           name: ''
    })
  }
}

  function handleDelete(id) {
    const todoListItems = todoList.filter(todo => todo.id !== id);
    setTodoList(todoListItems);
  }

  function handleClear() {
    setTodoList([]);
  }

  function handleComplete(id) {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return {...todo,
                  complete: !todo.complete}

        } else {
          return todo;
        }
      })
    )
  }

  return (
    <div className='content'>
      <Header todoList={todoList}/>
        <main>
            <form className='form' onSubmit={handleSubmit} noValidate>
              <input onChange={handleChange} value={todo.name} type='text' required placeholder='What are your plans for today?' autoFocus/>
              <button className='add-button'>Add</button>
              <button className='clear-button' type='button' onClick={handleClear}>Clear</button>
            </form>
            {error ? (<div className='error-container'><span className='error'>Please enter a todo</span></div>) : ''} 
          <List todoList={todoList} handleDelete={handleDelete} handleComplete={handleComplete}/>
        </main>
    </div>
  );
}

export default App;
