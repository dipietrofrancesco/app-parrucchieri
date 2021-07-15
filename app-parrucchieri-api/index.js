const express = require("express");
const bodyParser = require('body-parser');
const routes = require("./routes/student");

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/api",routes);

app.listen(8080, ()=>{
    console.log("Funziona!");
});