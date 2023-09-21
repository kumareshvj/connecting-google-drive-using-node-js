const express = require('express');
const uploadRouter = require('./router');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(uploadRouter)

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.listen(6200,() => {
    console.log("app is listening on port 6200")
})

