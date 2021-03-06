// comando para establecer la conexion
var socket = io();

var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html'
    throw new Error('El escritorio es necesario');


}

var escritorio = searchParams.get('escritorio');

var label = $('small');

console.log(escritorio);
$('h1').text('Escritorio ' + escritorio); //actualiza el valor de la etiqueta h1

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        if (resp === 'No hay tickets') {
            alert(resp);
            label.text('No hay tickets');
            return
        }
        label.text('Ticket ' + resp.numero);
    })

})