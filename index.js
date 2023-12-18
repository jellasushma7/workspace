const express = require("express");
const { request } = require("https");
const app = express();

app.get("/", (request, response) =>{
    response.send("Hello World");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});