const TodoInput = ({todo, setTodo, addTodo}) => {
    return ( 
        <>
            <form onSubmit={addTodo}>

            <input className="m-1 bg-slate-200 rounded-lg focus:outline-none
            border-2
            focus:border-teal-300 focus:border-2" 
             type="text"
             onChange={(e) => setTodo(e.target.value)}
             value={todo}/>

             <input type="submit" value={"ADD"} className="font-light
              bg-teal-800 text-white  rounded-xl
               p-1 ml-2 cursor-pointer
             hover:bg-teal-600 active:bg-green-950
            "/>

            </form>
        </>
     );
}
 
export default TodoInput;