const express = require('express');
const app = express();


app.use(express.json());
// What is express.json()?
// express.json() is middleware that tells Express:
// "If the client sends JSON data in the request body, parse it into a JavaScript object and store it in req.body."
// Without express.json()
// Suppose a client sends:
// POST /user
// Content-Type: application/json
// {
//   "name": "Tanish",
//   "age": 21
// }
// Your route:
// app.post("/user", (req, res) => {
//     console.log(req.body);
//     res.send("Done");
// });
// If you don't use:
// app.use(express.json());
// then:
// req.body
// will be:
// undefined
// because Express doesn't automatically parse JSON.


const studentRoutes = require('./routes/studentRoutes');
app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 1124;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});