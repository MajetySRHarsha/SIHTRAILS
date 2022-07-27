const express = require('express')
const app =express()
const mysql =require('mysql')
const cors=require('cors')

app.use(cors());
app.use(express.json());


const db=mysql.createConnection({user:'root',
host:'localhost',
password:'',
database:'crud'
});

app.post('/create',(req,res) =>{
    const name= req.body.name;
    const date=req.body.date;

    db.query('insert into event(Name,Date)values(?,?)',[name,date],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send("Values inserted")
        }
    });

});

app.get('/events',(req,res)=>{
    db.query("Select * from event",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
});

app.listen(3001,()=>{
    console.log("Yay your server is ready on port 3001");
});
