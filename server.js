const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const port =1124
app.listen(port,()=>{
    console.log("server is running on 1124");
});