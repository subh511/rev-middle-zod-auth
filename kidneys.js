const express = require("express");
const app = express();

app.use(express.json());

app.post("/health", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneysLength = kidneys.length;

  res.send("You have " + kidneysLength + " kidneys");
});

//Global Catches;
//it is called error based middlewares, & called at last,
//of your all middlewares
app.use(function (err, req, res, next) {
    //an errorCount++ added to keep
    //track of errors;
  res.json({
    msg: "OOPS Something Wrong With Our Server",
  });
});

app.listen(3000);
