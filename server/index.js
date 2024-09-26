const express = require('express');
const app = express();

const hostname = 'localhost';
const PORT = 8080;

app.listen(PORT, hostname, ()=>{
    console.log(`The server is running on ${hostname}:${PORT}`);
})

