//Create web server
var express = require('express');
var app = express();
var path = require('path');

//Create server
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//Create database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/comments');

//Create schema
var schema = new Schema({
    name: String,
    comment: String
});

var Comment = mongoose.model('Comment', schema);

//Create static folder
app.use(express.static(path.join(__dirname, 'public')));

//Listen to port
server.listen(3000, function () {
    console.log('Server listening at port %d', 3000);
});

//Get all comments
app.get('/comments', function (req, res) {
    Comment.find({}, function (err, comments) {
        res.send(comments);
    });
});

//Post new comment
app.post('/comments', function (req, res) {
    var comment = new Comment(req.body);
    comment.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Comment saved');
        }
    });
});

//Socket connection
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('comment', function (data) {
        console.log(data);
    });
});