const express = require("express");
const zod = require("zod");
const app = express();
//const port = 3000;


function validateInput(arr){

    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr)
    console.log(response)
}

function validateObject(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(6)
    })

    const response = schema.safeParse(obj)
    console.log(response)
}

// validateInput([1,'2',3,4])
 validateObject({
    email:"samrat@gmail.com",
    password:"123456"
 })

app.listen(3000)

