import React, {useState} from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./Item/CreateTodoField";
import {BiLogOut} from "react-icons/bi";

const data = []


const Home = ({account, setLogin}) => {

    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const curr = copy.find(t => t.id === id);
        curr.isCompleted = !curr.isCompleted;
        setTodos(copy);
    }
    const removeTodo = (id) => {
        setTodos([...todos].filter(e => e.id !== id));
    }

    return (
        <div className='h-full text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-4'>Todo list</h1>
            <span className={'flex item-center justify-between mb-4  p-5 w-full'}>
                <h2 className='text-2xl font-bold text-center mb-4'>Account: {account}</h2>
                <BiLogOut size={24} className='text-2xl font-bold text-center mb-4 hover:accent-red-600' onClick={() => setLogin('')}>Log out</BiLogOut>
            </span>
                {todos.map((todo) => (
                    <span key={todo.id} className={'item-center'}>
                        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
                    </span>
                ))}
            <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}

export default Home
