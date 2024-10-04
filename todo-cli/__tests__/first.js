//FIRST TEST CASE

// describe('First test suite', () => 
//  {  test('First test case',() => {
// expect(true).toBe(true);  //if we expect false to be true, the test case will fail
//    })
// })

const todoList = require('../todo_app');
const {all, markAsComplete, add} = todoList()

describe('Todolist Test Suite', () => 
   
   { beforeAll(()=>{
      add(
         {
            title: "Test todo",
            completed: false,
            dueDate: new Date().toISOString().slice(0, 10)
         })
   })
      
      test('Should add new todo',() => {
 // expect(all.length).toBe(0);
 const todoItemsCount = all.length;
  add(
   {
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10)
   }
  );
  expect(all.length).toBe(todoItemsCount+1);  //now second test case doesnt depend on first
     });

     test('Should mark a todo as complete',() => {
      expect(all[0].completed).toBe(false);
      markAsComplete(0);
      expect(all[0].completed).toBe(true);  
         })
    
//the second test case depends on first so we will now use beforeall()









  })