const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json())
//const port = 3000;

// function validateInput(arr){

//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(arr)
//     console.log(response)
// }

function validateObject(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
  });

  const response = schema.safeParse(obj);
  console.log(response);
}

// validateInput([1,'2',3,4])
//  validateObject({
//     email:"samrat@gmail.com",
//     password:"samrat"
//  })

app.post("/login", function (req, res) {
  const inputs = req.body.input;
  const response = validateObject(inputs);
  if (!response.success) {
    res.json({
        msg:"your inputs are incorrect"
    });
    return;
  }
  
//   res.json({
//     msg: "your inputs are valid",
//   });

});


app.listen(3000);
