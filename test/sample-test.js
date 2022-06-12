const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TodoList", function () {
  let todoList;
  let owner, signer;
  
  beforeEach(async function () {
    [owner, signer] = await ethers.getSigners();
    const TodoList = await ethers.getContractFactory("TodoList");
    todoList = await TodoList.deploy();
    await todoList.deployed();
  })

  describe("Basic functionality", async function() {
    
    it("Should be add todo", async function () {
      const title = "Hello world";
      const todoId = await todoList.addTodo(title);
      let todos = await todoList.getTodoList();
      expect(todos[0].title).to.eq(title);
      expect(todos[0].isCompleted).to.eq(false);

      console.log(`todo = ${todos[0].id}, ${todos[0].title}, ${todos[0].isCompleted}`)

      // console.log(todoId);
      await todoList.taskStateChange(1);
      todos = await todoList.getTodoList();
      console.log(`todo = ${todos[0].id}, ${todos[0].title}, ${todos[0].isCompleted}`)

      expect(todos[0].isCompleted).to.eq(true);

    });
    
    
  })
});
