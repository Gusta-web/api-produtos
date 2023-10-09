module.exports = app => {
    const controller = require('../controllers/controller')();
  
    app.route('/apiProdutos/Produtos').get(controller.listaProdutos); /* GET -  lista todos os produtos com thumb */

    app.route('/apiProdutos/Produtos/:id').get(controller.listaProdutoUnico); /* GET - com parâmetro id */
  }