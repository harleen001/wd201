//FIRST TEST CASE

// describe('First test suite', () => 
//  {  test('First test case',() => {
// expect(true).toBe(true);  //if we expect false to be true, the test case will fail
//    })
// })

const todoList = require('../todo_app');
const {all, markAsComplete, add} = todoList()

describe('Todolist Test Suite', () => 
   {  test('Should add new todo',() => {
  expect(all.length).toBe(0);
  add(
   {
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10)
   }
  );
  expect(all.length).toBe(1);  
     })
  })