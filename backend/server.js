const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();


//setup express app
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');

app.use('/users', userRouter);
app.use('/exercises', exerciseRouter);

//DB setup
console.log("Before connect");
const mongooDBUri = process.env.MONGO_DB
mongoose.connect(mongooDBUri, { useNewUrlParser: true });//useCreateIndex: true

console.log("After connect");

console.log("Before connection");
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongo db connection established sucessfully");
});
console.log("After connection");

console.log("App listen");


//START EXPRESS APP
app.listen(port, () => console.log('backend app started using port : ' + port));





// function doIt(functionToDo, ...args)
// {
//     functionToDo(args);
// }

// doIt( () => console.log("a") );
// doIt( () => {console.log("a"); console.log("b");} );

// doIt( a => console.log(a) , 'Hello');
// doIt( (a,b) => console.log(a+" : "+b) , "Hello", "Mythili");

