var express = require('express');
var bodyParser = require('body-parser');
var socket = require('socket.io');

var PORT = 9000;
var app = express();

var server = app.listen(PORT, function(){
  console.log('Listening to Port:' + PORT)
});

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index');
});

//socket setup
var io = socket(server);

io.on('connection', function(socket){
  console.log('made socket connection', socket.id);

  socket.on('chat', function(data){
    io.sockets.emit('chat',data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
  })
})
