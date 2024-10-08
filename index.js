const express = require('express');
const app = express();
const {Todo} = require('./models');
const bodyParser = require('body-parser');
const path = require('path');


app.set('view engine', 'ejs');


app.listen(3000)
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
//ROUTE



app.get("/",(request,response)=>{

  response.render('index');
});


app.get('/todos', (request, response) =>{
   // response.send('Hello World')
   console.log("To do request sent")
  })

app.post('/todos', async (request, response) =>{
  // response.send('Hello World')
  console.log("Creating a todo",request.body)
  try {
    const todo = await Todo.create({title: request.body.title, dueDate: request.body.dueDate, completed:false})
  return response.json(todo);
  } catch (error) {
    console.log(error)
    return response.status(422).json(error);
  }
  })
 
app.put('todos/:id/markasCompleted',(request,response)=>{
  console.log("we have to update a todo with id:",request.params.id)
})


app.delete('todos/:id',(request,response)=>{
  console.log("Delete a todo with id:",request.params.id)
})

app.get('/', function (request, response) {
    response.send('Hello World')
  })

  //sequelize is ORM --> OBJECT RELATIONAL MAPPING 
  //pg is server connector
  //sequelize-cli is a beautiful command line tool for it