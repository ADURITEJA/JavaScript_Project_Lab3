var express =require("express")
var app=express()
app.use(express.json())
//array creation

let students=[{
    "id":1,
    "name":"A",
    "mobileno":6301318852,
    "address":"ABC",
    "age":21
},
{
    "id":2,
    "name":"B",
    "mobileno":6301318852,
    "address":"BCd",
    "age":25
}
]

//add a new student
//post

app.post('/students', (req,resp)=>{
    const newstudent={
        id:students.length+1,
        name: req.body.name,
        mobileno:req.body.mobileno,
        address:req.body.address,
        age:req.body.age
    }
    students.push(newstudent)
    resp.send(newstudent)
})
//get
app.get('/students',(req,resp)=>{
    resp.send(students)
})
//find student by id
app.get('/students/:id', (req,resp)=>{
    const student = students.find(s=>s.id == req.params.id)
    if(!student) return resp.status(404).send("User not found");
    resp.send(student)
})

//
app.listen(3000, ()=> console.log("API started listening...,.,.,...."))