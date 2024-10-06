import React from 'react'
import { LuListTodo } from "react-icons/lu";
import TodoItems from './TodoItems';


const Todo = () => {
  return (
    <div className='bg-white place-self-center	w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
       
        {/* ----- Title ----- */}

        <div className='flex items-center mt-7 gap-2'>
            <LuListTodo className='w-12 h-12'/>
            <h1 className='text-3xl font-semibold '>To-Do List</h1>
        </div>

        {/* -----Input-Box ----- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input type="text" className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 placeholder:text-slate-600" placeholder='Add your Task'/>
            <button className='border-none rounded-full bg-fuchsia-500 hover:bg-fuchsia-600  w-32 h-10 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>

        {/* ----- Todo-List ----- */}

        <div>
            <TodoItems text="Learn"/>
        </div>
    </div>
  )
}

export default Todo