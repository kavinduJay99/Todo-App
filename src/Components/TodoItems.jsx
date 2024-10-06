import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";

const TodoItems = ({text, id, isComplete, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>

            <GiCheckMark className='w-9 text-fuchsia-400 '/>
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>

        </div>
        <RiDeleteBin5Line onClick={()=>{deleteTodo(id)}} className='w-9 h-4 cursor-pointer hover:text-rose-600'/>
    </div>
  )
}

export default TodoItems