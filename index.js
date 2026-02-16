var express =require("express")
var app=express()
app.get('/',function(req,resp){
    resp.send("Hello from API")
})
app.get('/greeting',function(req,resp){
    resp.send("Hello from greeting")
})
app.get('/time',function(req,resp){
    var time = new Date().toLocaleTimeString()
    resp.send(`TIme is : ${time}`)
})
app.get('/data',function(req,resp){
    var date = new Date().toLocaleDateString()
    resp.send(`Date is : ${date}`)
})
//parameterized root
app.get('/wishes/:name',function(req,resp){
    var name=req.params.name
    resp.send(`Hello ${name}`)
})

app.get('/square/:n',function(req,resp){
    var n = Number(req.params.n);
    resp.send(`Sqaure of ${n} is : ${n*n}`)
})
app.get('/addition/:a/:b',function(req,resp){
    var a = Number(req.params.a)
    var b= Number(req.params.b)
    resp.send(`Add of ${a} and ${b} is : ${a+b}`)
})

app.use(express.json());

let users=[
    {id:1, name :"Teja", age:21},
    {id:2, name: "Rishitha", age:21}
]

//post

app.post('/users', (req,resp)=>{
    const newUser = {
        id:users.length+1,
        name:req.body.name,
        age:req.body.age
    }
    users.push(newUser)
    resp.send(newUser)
    
});

// get
app.get('/users', (req,resp)=>{
    resp.send(users)
})

//update

app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  user.age = req.body.age;

  res.send(user);
});


app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.status(404).send("User not found");

  user.name = req.body.name;
  user.age = req.body.age;

  res.send(user);
});

app.listen(9000, ()=> console.log("API started listening...,.,.,...."))