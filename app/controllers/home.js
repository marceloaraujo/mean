/**
 * Quando o usuário digitar http://localhost:3000/, o express verificará 
 * se há alguma rota registrada como '/' e executará uma ação associada à rota.
 * Essa execução será responsabilidade desse arquivo dentro da pasta controllers.
 * Esse arquivo tem o mesmo nome do arquivo que está na pasta 'routes'.
 * No modelo MVC, o controller é a ponte de ligação entre a nossa página (view) e nossos
 * dados (model).
 */
module.exports = function() {
    var controller = {};
    controller.index = function(req, res) {
        //irá retornar a página index.ejs
        res.render('index', {nome: 'Tutorial Express'});
    };
    /**
     * Por padrão, o express adiciona o sufixo '.ejs' ao nome do arquivo (index, passado no res.render),
     * procurando na pasta app/views (essa pasta foi configurada na variável de ambiente views lá no express.js)
     */
    return controller;
}