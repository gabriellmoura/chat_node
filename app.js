/**
 * Created by ellen on 15/03/2017.
 */
const app = require('./config/server');

const server = app.listen(80, function() {
    console.log("Servidor up");
});

const io = require('socket.io').listen(server);

io.on('connection', function(socket){
    console.log("Usuario conectado ao chat.");

    /*socket.emit('news', { hello: 'hello world' });*/

    socket.on('disconnect', function(){
        console.log("Usuario desconectado ao chat.")
    });

    socket.on('msgToServer', function(data){
        socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});
        socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem});

        if (parseInt(data.usuarioStatus) == 0) {
            socket.emit('statusParticipantes', {apelido: data.apelido});
            socket.broadcast.emit('statusParticipantes', {apelido: data.apelido});
        }

    });


});

//criando uma variável global dentro do projeto
app.set('io', io);