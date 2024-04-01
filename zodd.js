const express = require("express");
const zod = require("zod");
const app = express();

//kidneys inputs

const schema = zod.array(zod.number())

app.use(express.json())

app.post("/",function(req,res){
    const kidneys = req.body.kidneys;

    const response = schema.safeParse(kidneys)

    if(!response.success){
        res.status(411).json({
            msg:"invalid inputs"
        })
    }else{
        res.send({
            response
        })
    }
})

app.listen(3000)