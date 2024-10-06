import React from 'react'
import { GoCheckCircle, GoCircle  } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className=' font-poppins flex items-center my-3 gap-2'>

        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>

            {isComplete ? <GoCheckCircle className={`w-6 h-6 text-green-500 hover:text-green-700`}/> : 
            <GoCircle className={`w-6 h-6 text-fuchsia-400 hover:text-fuchsia-600`}/>}
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>

        </div>

        <RiDeleteBin5Line onClick={()=>{deleteTodo(id)}} className='w-4 h-6 cursor-pointer text-rose-400 hover:text-rose-600'/>
    </div>
  )
}

export default TodoItems