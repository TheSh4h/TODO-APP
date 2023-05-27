import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App(){

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if(todo !== "") {
            setTodos([...todos, todo])
            setTodo("");
        }
    }

    const deleteTodo = (value) => {
        const newTodo = todos.filter(todo => {
           return todo !== value;
        });
        setTodos(newTodo);
    }

    return ( 
        <div className="text-center text-slate-200 text-xl p-10
        font-mono font-bold">
            <h1>DO-DO APP</h1>
            <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <TodoList list={todos} remove={deleteTodo} />
        </div>
     );
}
 
export default App;