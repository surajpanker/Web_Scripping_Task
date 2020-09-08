const express =require('express');
const bodyParser = require('body-parser')
const app =express();
const getResults = require("./index");
app.use(bodyParser.json());

/* GET home page. */
app.get("/getTimes", async (req, res)=> {
  // console.log(req.body.url)
  const result = await getResults(req.body.url);
   res.send(result);
  

});
module.exports=app;

