/**
 * Aqui usaremos o módulo do Express
 */
var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' + app.get('port'));
});