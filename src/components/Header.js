
function Header({todoList}) {
  const incompleteTodos = todoList.filter(todo => !todo.complete).length;
    
  return (
      <div className='header-container'>
          <h1 className='title'>Todo List</h1>
          <h1 className='todo-count'>{incompleteTodos} {incompleteTodos === 1 ? 'Todo Remaining' : 'Todos Remaining'}</h1>
      </div>
    )
}

export default Header;