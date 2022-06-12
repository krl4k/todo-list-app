//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract TodoList {
    struct Todo {
        uint    id;
        string  title;
        bool    isCompleted;
    }

    uint todoID;
    mapping (address => Todo[]) todoLists;

    function getTodoList() public view returns (Todo[] memory) {
        return todoLists[msg.sender];
    }

    function addTodo(string memory title) public returns(uint) {
        Todo[] storage todoList = todoLists[msg.sender];
        todoList.push(Todo(++todoID, title, false));
        return todoID;
    }

    function deleteTodo(uint index) public {
        Todo[] storage array = todoLists[msg.sender];

        if (index >= array.length) return;

        for (uint i = index; i<array.length-1; i++){
            array[i] = array[i+1];
        }
        delete array[array.length-1];
    }

    function taskStateChange(uint id) public {
        Todo[] storage todoList = todoLists[msg.sender];
        
        for (uint i = 0; i < todoList.length-1; i++){
            if (todoList[i].id == id) {
                todoList[i].isCompleted = !todoList[i].isCompleted;
            }
        }
    }
}
