
// comando para establecer la conexión

var socket = io();

var label = $("#lblNuevoTicket");

socket.on('connect', function () {
  console.log('conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('disconnect del servidor');
});

socket.on('estadoActual', function(resp){
  console.log(resp.actual);
  label.text(resp.actual);
});

$('button').on('click', function() {
  // console.log('click');
  socket.emit('siguienteTicket',null, function(ticket){
      label.text(ticket);
  });

});
