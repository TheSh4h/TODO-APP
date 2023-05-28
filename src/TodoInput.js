const TodoInput = ({todo, setTodo, addTodo}) => {

    const addIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
  </svg>  

    return ( 
        <>
            <form onSubmit={addTodo}>

            <input className="m-5 bg-slate-200 rounded-lg focus:outline-none
            border-2 w-80 text-black
            focus:border-teal-300 focus:border-2" 
             type="text"
             onChange={(e) => setTodo(e.target.value)}
             value={todo}/>

             <button type="submit" 
             className="font-light
            bg-teal-800 text-white  rounded-xl
            p-1 cursor-pointer
            hover:bg-teal-600 active:bg-green-950
            "> {addIcon} </button>

            </form>
        </>
     );
}
 
export default TodoInput;