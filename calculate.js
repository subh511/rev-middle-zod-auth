const express = require("express");
const app = express();

let numberOfRequest = 0

function calculateRequest(req, res, next) {
  numberOfRequest++;
  console.log(numberOfRequest);
  next();
}

app.post("/po",calculateRequest,function (req, res) {
  res.json({
    msg: "done!",
  });
});

//1st approach define function after logic call next()
//and in 2nd approach the function and next() will be same
//but instead of invoking inside function we use - app.use(function)
 
//either way we can do it
//invoking cb inside function or using app.use(function) 
//mention below 2nd method;


// app.use(calculateRequest)
// app.post("/po",function (req, res) {
//   res.json({
//     msg: "done!",
//   });
// });

app.listen(3000);
