import React, {useState} from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./Item/CreateTodoField";

const data = []


const Home = ({account}) => {

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
            <h2 className='text-2xl font-bold text-center mb-4'>Account: {account}</h2>
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
