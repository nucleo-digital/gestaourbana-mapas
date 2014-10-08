function getCustomers(req, res) {
  //...
}

function createCustomer(req, res) {
  //...
}

function setup(app) {
  // app.post('/customers', createCustomer);
  app.get('/layers/groups', getCustomers);
}

module.exports = setup;
