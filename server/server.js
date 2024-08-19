const express =require("express")
const app = express()
app.use(express.json())


//#region PostgreSQL 연결

const { Client } = require("pg");
const dbClient = new Client({
    user: "postgres",
    host: "158.214.2",
    database: "postgres",
    password: "****",
    port: 5432
});

dbClient.connect();

//#endregion
















app.listen(8000,() => {
    console.log("test message")
})

app.get('/logIn/:{id}/:{pwd}', (res, req) =>{
    console.log("test message2")
})


app.get('/logIn/:id/:pwd', function (req, res) {
    var params = req.params;
 });