
function List({todoList, handleDelete, handleComplete, todoRef}) {

    return (
      <div className='list-container'>
        {todoList.length > 0 ? (
            <ul>
                {todoList.map((todoItem) => (
                    <div className='item-container' key={todoItem.id}>
                        {todoItem.complete === false ? 
                        <li className='todo-item'>{todoItem.name}</li> :
                        <li className='complete-item'>{todoItem.name}</li>}
                        <div className='todo-button-container'>
                        <button className='complete-button' onClick={() => handleComplete(todoItem.id)}>Complete</button>
                        <button className='delete-button' onClick={() => handleDelete(todoItem.id)}>Delete</button>
                        </div>
                    </div>
                ))} 
            </ul> ) : (<h1 className='zero-item-text'>0 Todo Items</h1>)}
      </div>
    )
}

export default List;