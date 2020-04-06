'use strict'

require('express-async-errors');
const app = require("express")();
//const bodyParser = require('body-parser');
const morgan = require('morgan')


app.use(morgan('combined'));
//express
app.use(bodyParser.raw({ type: '*/*; charset=utf-8' }))
app.use(bodyParser.text({ type: '*/*'}))
app.use(app.json()); // for parsing application/json

app.use('/',require('./routers/eth'))

// app.use((err, req, res, next)=>{
//     res.fail(err.toString())
// });
app.use((err,req,res,next)=>{
    res.send({
        code:-1,
        msg:err.toString()
    })
})
app.listen(3000, () => {
    console.log('ready')
});
