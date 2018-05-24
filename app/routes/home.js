/**
 * Uma rota é necessária para acessar o arquivo index.ejs dentro da pasta views,
 * ou seja, precisamos tornar publico um caminho de acesso para essa página
 */
var controller = require('../controllers/home')(); // os parenteses no final foram necessários para corrigir o seguinte erro: Route.get() requires a callback function but got a [object Undefined]
module.exports = function(app) {
    /**
     * Vamos responder à url '/'
     * Configurando a rota para que chame o controller
     */
    app.get('/index', controller.index);
    app.get('/', controller.index);
}