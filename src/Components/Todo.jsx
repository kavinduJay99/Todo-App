import React, { useEffect, useRef, useState } from 'react'
import { LuListTodo } from "react-icons/lu";
import TodoItems from './TodoItems';


const Todo = () => {

    const [todoList,setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [ ]);

    const inputRef = useRef()

    const add = ()=>{
        const inputText = inputRef.current.value.trim();

        if(inputText ===""){
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev)=>[...prev, newTodo]);
        inputRef.current.value = "" 
    }

    const deleteTodo = (id) => {
        setTodoList((prevTodos)=>{
            return prevTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) =>{
        setTodoList((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete};
                }
                return todo;
            })
        })
    }

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList))
},[todoList])

  return (
    <div className='font-poppins bg-white place-self-center	w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
       
        {/* ----- Title ----- */}

        <div className='flex items-center mt-7 gap-5'>
            <LuListTodo className='w-9 h-9'/>
            <h1 className='text-3xl font-semibold '>Todo List</h1>
        </div>

        {/* -----Input-Box ----- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputRef} type="text" className="bg-transparent border-0 outline-none flex-1 h-10 pl-6 pr-2 placeholder:text-slate-600" placeholder='Add your Task'/>
            <button onClick={add} className='border-none rounded-full bg-fuchsia-500 hover:bg-fuchsia-600  w-32 h-10 text-white text-lg font-medium cursor-pointer'>Add +</button>
        </div>

        {/* ----- Todo-List ----- */}

        <div>
            {todoList.map((item, index)=>{
                return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>
            })}
            
        </div>
    </div>
  )
}

export default Todo