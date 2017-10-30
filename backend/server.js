var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var messages = [{text: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];
var users = [];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

var api = express.Router();
var auth = express.Router();
api.get('/messages', (req, res) => {
    res.json(messages);
})

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner === user);
    res.json(result);
})

api.post('/message', (req, res) => {
    messages.push(req.body);
    //res.writeHead({'Content-Type': 'application/json'});
    res.status(200).json({result: messages});
})

auth.post('/register', (req, res) =>{
    console.log('register');
    console.log('user: ', req.body);
    var index = users.push(req.body) -1;

    var user = users[index];
    user.id = index;
    
    var token = jwt.sign(user.id, '123');
    res.status(200).json({result: token});
})

app.use('/api', api);
app.use('/auth', auth);

app.listen(1234);