// const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());


const users =
    [{
        "id": 1,
        "name":"Alice",
        "age": 12
    },
    {
        "id": 2,
        "name":"Jhon",
        "age": 12
    },
    {
        "id": 3,
        "name":"Robert",
        "age": 12
    }
    ]


app.get('/',(req, res)=>{
    res.send('hello world')
});

app.get('/api/users',(req,res)=>{
   res.send(users) ;
});

app.get('/api/users/:id',(req,res)=>{
    const user = users.find( item => item.id === parseInt( req.params.id));
    if (!user)res.status(404).send("id invalid");

    res.send(user);
});
// app.get('/api/posts/:month/:year',(req,res)=>{
//     res.send(req.params  );
// })

app.post('/api/users', (req,res)=>{
    // const schema = {
    //     name: Joi.string().min().required()
    // };
    // const result = Joi.validate(req.body,schema);
    // if (result.error){
    //     res.status(400).send(result.error.details[0].message)
    //     return;
    // }
    if (!req.body.name || req.body.name.length <3){
        res.status(400).send('name is required must')
        return;
    }
    const user ={
        id: users.length = + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(user);
    console.log(users)
    res.send(user);
});

app.put('/api/users/:id', ()=>{
    //Look up the course 
    //If not existing , return 404

    //validate 
    //If invalid , return 400 - Bad request
    //Return the update course

    const user = users.find( item => item.id === parseInt( req.params.id));
    if (!user)res.status(404).send("id invalid");
    user.name = req.body.name;
    res.send(user);


})

const port = process.env.PORT ||3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});

