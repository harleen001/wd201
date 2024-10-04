
const todoList = () => {
    all = []
    const add = (todoTask) =>{
        all.push(todoTask)
        console.log(all)
    }
    
    const markasComplete = (index) =>{
        all[index].completed=true
        console.log(all)
    }
    return {all,add,markasComplete};
}
const todos = todoList()
todos.all
todos.add({title:"I need to go to gym", dueDate:"05-09-2022",completed:false})


todos.add({title:"Renew Insurance", dueDate:"10-09-2022",completed:false})
todos.markasComplete(1);