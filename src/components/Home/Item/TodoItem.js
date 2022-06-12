import React from 'react';
import Check from "./Check";
import cn from "classnames";
import {MdOutlineRemoveCircleOutline} from "react-icons/md";

const TodoItem = ({todo, changeTodo, removeTodo}) => (
    <div className={'flex item-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'}>

        <button className={'flex item-center'} onClick={() => changeTodo(todo.id)}>
            <Check isCompleted={todo.isCompleted}/>
        </button>

        <span className={cn({'line-through': todo.isCompleted}, 'break-words')}>
            {todo.title}
        </span>

        <button onClick={() => removeTodo(todo.id)}>
            <MdOutlineRemoveCircleOutline size={22} className={'text-gray-400 hover:text-red-700'} />
        </button>
    </div>
);

export default TodoItem;