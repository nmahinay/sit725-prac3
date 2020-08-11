var express=require('express')
var moment=require('moment')

var app=express()

var log=function(message){
    var time=moment().format()
    console.log('[Server] @'+time+' '+message)
}

var adder=function(num1,num2){
    var result = num1+num2;
    return result
}

app.get('/adder', function(request,response){
    log('Adder request made')
    let num1 = parseInt(request.query.num1);
    let num2 = parseInt(request.query.num2);
    let result=adder(num1,num2);
    response.send(''+result+'')
})

var port=4000;
app.listen(port)
log('Server listening on: '+port)