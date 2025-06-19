import express from "express";

const server = express();

server.listen(3002, ()=>{
    console.log(`Server is on : ${3002} PORT`);
})

server.get('/', (req, res) => {
  res.send('Hello CI/CD World!');
});