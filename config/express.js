/**
 * Configurando o Express
 * A responsabilidade desse módulo é retornar uma instância
 * configurada do Express.
 */
var express = require('express');
var home = require('../app/routes/home');
var bodyParser = require('body-parser');

var load = require('express-load');

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
    // home(app);

    /**
     * Usando o express-load para carregar as dependências
     * A função load carregará tudo dentro das pastas app/models, app/routes e app/controllers
     * É necessário seguir essa ordem de carregamento, senão não conseguiremos acessar os controllers
     * dentro das rotas, se os controllers forem carregados por último
     * O parâmetro cwd serve para mudar o diretório padrão do load. Sem isso, o load iria produrar na pasta 
     * raiz do projeto (contatooh), e precisamos que ele procure a partir da pasta contatooh/app
     */
    load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);


    /**
     * Configurando o app para usar bodyParser
     * Isso permitirá pegar os dados de um post 
     */    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    /**
     * TESTE: criando uma rota para a api
     *
    var router = express.Router();

    **
     * Testando a rota com um get
     *
    router.get('/teste', function(req, res) {
        res.json({message: 'Bem-vindo à api de teste!'});
    });

    /**
     * Testando a rota com um post
     *
    router.route('/loupen/:empresa/:id_integracao').post(function(req, res) {
        console.log(req.body);
        var empresa = req.params.empresa;
        var idIntegracao = req.params.id_integracao;

        if(empresa == "teste" && idIntegracao == 1) {
            res.json({message: 'POST efetuado!'});
        } else {
            res.json({message: 'Dados não encontrados!!'});
        }
    });

    /**
     * Registrando a rota
     *
    app.use('/api', router);
    */

    /**
     * Usando ejs para criar templates
     */
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    return app;
}