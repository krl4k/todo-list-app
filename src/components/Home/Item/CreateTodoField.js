import React, {useState} from 'react';
import {HiOutlinePlusCircle} from "react-icons/hi";

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev =>
            [
                ...prev,
                {
                    id: prev.length + 1,
                    title: title,
                    isCompleted: false
                }
            ]
        )
        setTitle('');
    };

    return (
        <div className={'flex item-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'}>
            <HiOutlinePlusCircle className={'text-pink-600 w-9 h-9 mr-3 bg-gray-800'}/>
            <input type="text"
                   onChange={e => setTitle(e.target.value)}
                   value={title}
                   onKeyPress={event => event.key === "Enter" && title.length && addTodo(title)}
                   className={'break-words bg-transparent w-full flex item-center border-none outline-none'}
                   placeholder='Add task'

            />
        </div>
    )
};

export default CreateTodoField;