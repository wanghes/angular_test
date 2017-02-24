var express = require('express');
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override');  
var app = express();

app.use(express.static(__dirname+''));
app.use(bodyParser());
app.use(methodOverride());

var names = [
    'code_bunny','mi_bunny','hua_bunny'
];

app.get('/setcookie', function(req, res){
    //没有HttpOnly的话可以在客户端document.cookie获取，也就是说客户端可以操作cookie,这是一种不安全的方式,所以才会加上HttpOnly(只在http请求中可以访问cookie,客户端就没有操作cookie的能力)
   // res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.append('Set-Cookie', 'foo=bar; Path=/');
    res.append('Warning', '199 Miscellaneous warning');
    //res.append('Content-Type', 'text/html');
    res.send({cookie:true})
    //res.sendFile(__dirname+'/index.html');
});

app.get('/api/users/:name',function(req,res){
    var name = req.params.name;
    var ifSame = false;

    names.some(function(item) {
        console.log(name+'++++++++++++++'+item)
        if(name == item) {
             ifSame = true;
            return true;
        }
    });

    if(ifSame){
        return res.json({status:true,value:name});
    }else{
        return res.json({status:false,value:''});
    }
});

app.listen(9000);

