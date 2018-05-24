/**
 * Configurando o Express
 * A responsabilidade desse módulo é retornar uma instância
 * configurada do Express.
 */
var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {
    var app = express();
    /**
     * app.set - podemos modificar variáveis de ambiente do express usando esse comando.
     * Nesse caso, configuro o express para ouvir requisições na porta 3000
     */
    app.set('port', 3000);

    /**
     * app.use e express.static - precisamos dar acesso ao usuário para a pasta public,
     * onde ficará as páginas html
     */
    app.use(express.static('./public'));

    /**
     * Configurando a rota 'home', que escutará a requisição das url's 'index' e '/'
     */
    home(app);

    /**
     * Usando ejs para criar templates
     */
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    return app;
}