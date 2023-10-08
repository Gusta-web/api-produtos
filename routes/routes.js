module.exports = app => {
    const controller = require('../controllers/controller')();
  
    app.route('/apiProdutos/Produtos')
      .get(controller.listaProdutos);
  }