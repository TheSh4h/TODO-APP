const TodoList = ({ list, remove }) => {
    return ( 
        <>

        {
            list.length > 0 ? (
                <ul>
                    {list.map((todo, index) => (
                        <div className="flex flex-row justify-evenly" >
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

        </>
     );
}
 
export default TodoList;