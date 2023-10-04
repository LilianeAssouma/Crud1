const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const bodyparser=require('body-parser');
app.use(bodyParser.json());
const port = 8800;

let database=[
   {
    id:1,
    title:"Fuel prices increased",
    body:"RURA has announced",
   },
];

app.get('/',(req,res)=>{
    res.send(database);
});
app.post('/',(req,res)=>{
   console.log(req.body);
   database.push(req.body);
   res.sendStatus(201).json({
    message:"newsletter createed",
   })

});
app.put('/',(req,res)=>{
    res.send("Put request");
});
app.patch('/',(req,res)=>{
    res.send("Patch request");
});
app.delete('/',(req,res)=>{
    res.send("Delete Method");
});


app.listen(port,  ()=>{
    console.log(`server is running on port ${port}`)
})