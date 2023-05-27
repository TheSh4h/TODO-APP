const TodoList = ({ list, remove }) => {
    return ( 
        <div>

        {
            list.length > 0 ? (
                <ul>
                    {list.map((todo, index) => (
                        <div className="flex flex-row justify-between
                    m-10 mr-20 ml-20 lg:mr-80 lg:ml-80">
                            <li key={index}>{todo}</li>
                            <button onClick={() => remove(todo)}>Delete</button>
                        </div>
                    ))}
                </ul>
                ) : (
                    <div className="empty">
                        <p>No tasks</p>
                    </div>
                )
        }

        </div>
     );
}
 
export default TodoList;