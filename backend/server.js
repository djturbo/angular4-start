var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var messages = [{ text: 'some text', owner: 'Tim' }, { text: 'other message', owner: 'Jane' }];
var users = [
    {
        id: 1,
        firstName: 'francisco',
        lastName: 'Arquellada',
        email: 'djturbo2002@gmail.com',
        password: '@djturbo'
    }
];

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
    res.status(200).json({ result: messages });
})

auth.post('/register', (req, res) => {
    console.log('register');
    console.log('user: ', req.body);
    var index = users.push(req.body) - 1;

    var user = users[index];
    user.id = index;

    sendToken(user, res);
})

auth.post('/login', (req, res) => {
    console.log('login req.body: ', req.body);
    var user = users.find(user => user.email === req.body.email);
    console.log('server login: user: ', user);
    if (!user) {
        sendErrorAuth(res);
    }
    if (user.password === req.body.password) {
        sendToken(user, res);
    } else {
        sendErrorAuth(res);
    }
})
function sendToken(user, res) {
    var token = jwt.sign(user.id, '123');
    res.status(200).json({ result: token, firstName: user.firstName });
}

function sendErrorAuth(res) {
    res.json({ success: false, message: 'email or password incorrect' }).status(201);
}

app.use('/api', api);
app.use('/auth', auth);

app.listen(1234);