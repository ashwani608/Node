var express = require('express');
var app = express();
var path = require('path');
var qs = require('querystring');
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/login', function(req, res) {
    console.log(req.method);
    var jsonString = '';
   
    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {
        var logindata = qs.parse(jsonString);
        console.log(logindata);
        if(logindata.name == 'user' && logindata.password == 'user') {
            res.send({'success':true});
        }
        else {
            res.send({'success':false});
        }
    });
    
    
});

app.listen(8080);
console.log('listening at 8080');
