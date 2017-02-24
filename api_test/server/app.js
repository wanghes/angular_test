var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(bodyParser());
app.use(cors());


var users = [{name:"王海松",city:"北京"},{name:"刘少乾",city:"北京"}];
app.get('/users',function(req,res){
    res.append('token', '3221323123');
    res.send({status:true,data:users});
});

app.post('/addUser',function(req,res){
    console.log(req.get('content-type'))
    console.log(req.get('token'))
    var name = req.body.name;
    var city = req.body.city;
    if(name && city){
        users.push({name:name,city:city});
        res.send({status:true});
    }else{
        res.send({status:false});
    }
});

app.delete('/user/:name',function(req,res){
    var name = req.params.name;
    var ifdel = false;

    var list = users.filter(function(item){
        if(item.name==name){
            ifdel = true;
        }
        return item.name != name;
    });

    if(ifdel){
        users = list;
        res.send({status:true});
    }else{
        res.send({status:false});
    }
});


app.listen(6500);